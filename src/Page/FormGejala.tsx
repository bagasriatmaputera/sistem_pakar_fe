import { useEffect, useState } from "react";
import NavbarMain from "../Components/NavbarMain";
import type { gejala } from "../Types/Type";
import axios from "axios";

export default function FormPage() {
    const [gejala, setGejala] = useState<gejala[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [answers, setAnswers] = useState<{ [key: number]: number }>({});
    
    const [pengguna, setPengguna] = useState({
        nama: '',
        jenis_kelamin: '',
        umur: '',
        prodi: ''
    });

    useEffect(() => {
        axios.get('http://localhost/diagnosa_adiksi_app/public/api/gejala')
            .then((res) => {
                setLoading(false);
                setGejala(res.data.data);
                console.log('Data gejala:', res.data.data);
            })
            .catch((err) => {
                setError(err.message || "Terjadi kesalahan");
                setLoading(false);
                console.error(err);
            });
    }, []);

    const handleChange = (gejalaId: number, value: number) => {
        setAnswers((prev) => ({
            ...prev,
            [gejalaId]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Pastikan semua pertanyaan sudah dijawab
        if (Object.keys(answers).length !== gejala.length) {
            alert("Harap jawab semua pertanyaan!");
            return;
        }

        console.log("Jawaban terkirim:", answers);

        axios.post("http://localhost/diagnosa_adiksi_app/public/api/diagnosa", { answers })
            .then((res) => {
                console.log("Hasil diagnosa:", res.data);
                alert("Diagnosa berhasil dikirim!");
            })
            .catch((err) => {
                console.error(err);
                alert("Terjadi kesalahan saat mengirim data");
            });
    };

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <NavbarMain />
            <div className="heading-text my-5 flex justify-center">
                <div className="text-center font-bold text-[#0CC0DF] text-5xl font-sans">
                    Diagnosa Adiksi AI (Chat GPT, Gemini, dll)
                </div>
            </div>
            <section className="steps my-10 flex flex-col justify-center items-center">
                <ul className="steps gap-3">
                    <li data-content="✓" className="step step-info">Informasi<br />Tes</li>
                    <li className="step step-info">Pertanyaan<br />Tes</li>
                    <li className="step">Hasil<br />Diagnosa</li>
                </ul>
            </section>

            <form
                onSubmit={handleSubmit}
                className="form-gejala flex flex-col justify-center my-10 items-center"
            >
                <div className="box-form w-2/3 text-lg text-[#464646]">
                    <p><span className="font-bold">Dalam 2 minggu terakhir, </span>seberapa sering kamu mengalami gejala atau perilaku yang berkaitan dengan penggunaan AI?</p>
                    <p className="my-5">Semua pertanyaan wajib dijawab untuk memastikan hasil diagnosa yang akurat berdasarkan metode Certainty Factor.</p>

                    {gejala.map((g) => (
                        <div className="my-10 ml-3" key={g.id}>
                            <p className="font-sans">{g.id}. Apakah Anda {g.nama}?</p>
                            <div className="radio-answer w-full ml-3 mt-3">
                                <ul className="flex gap-10 font-sans">
                                    {[
                                        { label: "Tidak Yakin", value: 0 },
                                        { label: "Sedikit Yakin", value: 0.25 },
                                        { label: "Cukup Yakin", value: 0.5 },
                                        { label: "Yakin", value: 0.75 },
                                        { label: "Sangat Yakin", value: 1 }
                                    ].map((opt, idx) => (
                                        <li key={idx}>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name={`gejala-${g.id}`}
                                                    value={opt.value}
                                                    onChange={() => handleChange(g.id, opt.value)}
                                                    checked={answers[g.id] === opt.value}
                                                    className="hidden peer"
                                                />
                                                <span className="py-2 px-3 border rounded-full px-5 bg-[#E3F8F8] peer-checked:bg-[#0CC0DF] peer-checked:text-white">
                                                    {opt.label}
                                                </span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="mt-6 bg-red text-white font-bold py-3 px-6 rounded-lg">
                    Kirim Diagnosa
                </button>
            </form>
        </>
    );
}
