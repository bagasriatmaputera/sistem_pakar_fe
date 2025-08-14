import React, { useEffect, useState } from "react";
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
    const handleChangePengguna = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setPengguna((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
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
        console.log("Jawaban Pengguna:", pengguna);


        // axios.post("http://localhost/diagnosa_adiksi_app/public/api/form-gejala", { answers, pengguna })
        //     .then((res) => {
        //         console.log("Hasil diagnosa:", res.data);
        //         alert("Diagnosa berhasil dikirim!");
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //         alert("Terjadi kesalahan saat mengirim data");
        //     });
    };

    if (loading) {
        return <p className="text-center font-sans">
            Loading ...
            <span className="loading loading-spinner loading-md"></span>
        </p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

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
                <div className="box-form w-5/6 sm:w-4/5 text-lg text-[#464646]">
                    <p><span className="font-bold">Dalam 2 minggu terakhir, </span>seberapa sering kamu mengalami gejala atau perilaku yang berkaitan dengan penggunaan AI?</p>
                    <p className="my-5">Semua pernyataan wajib dijawab untuk memastikan hasil diagnosa yang akurat berdasarkan metode Certainty Factor.</p>

                    {gejala.map((g, index) => (
                        <div className="my-10 ml-3" key={g.id}>
                            <p className="font-sans">{index + 1}. {g.nama}?</p>
                            <div className="radio-answer w-full ml-3 mt-3">
                                <ul className="flex flex-wrap gap-4 sm:gap-10 font-sans">
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
                <div onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()} className="cursor-pointer font-semibold text-[#464646] hover:text-white font-sans rounded-full border bg-[#E3F8F8] hover:bg-[#0CC0DF] py-2 px-4">Kirim Diagnosa</div>
                {/* modal */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <div>
                            <button
                                type="button"
                                onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).close()}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                ✕
                            </button>
                        </div>
                        {/* Nama */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nama <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="nama"
                                value={pengguna.nama}
                                onChange={handleChangePengguna}
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        {/* Jenis Kelamin */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Jenis Kelamin <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="jenis_kelamin"
                                value={pengguna.jenis_kelamin}
                                onChange={handleChangePengguna}
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <option value="">Pilih jenis kelamin</option>
                                <option value="laki-laki">Laki-laki</option>
                                <option value="perempuan">Perempuan</option>
                            </select>
                        </div>

                        {/* Umur */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Umur <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="umur"
                                value={pengguna.umur}
                                onChange={handleChangePengguna}
                                required
                                min={1}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        {/* Prodi */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Prodi (opsional)
                            </label>
                            <input
                                type="text"
                                name="prodi"
                                value={pengguna.prodi}
                                onChange={handleChangePengguna}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                        <div onClick={handleSubmit} className="mt-5 cursor-pointer font-semibold text-center text-[#464646] hover:text-white font-sans rounded-full border bg-[#E3F8F8] hover:bg-[#0CC0DF] py-2 px-4">Kirim Diagnosa</div>
                    </div>
                </dialog>
            </form>
        </>
    );
}
