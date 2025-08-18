import React, { useEffect, useState } from "react";
import NavbarMain from "../Components/NavbarMain";
import type { Answer, Aturan } from "../Types/Type";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormPage() {
    const [gejala, setGejala] = useState<Aturan[]>([]);
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const navigate = useNavigate();


    const [pengguna, setPengguna] = useState({
        nama: '',
        jenis_kelamin: '',
        umur: '',
        prodi: ''
    });

    useEffect(() => {
        axios.get('http://localhost/diagnosa_adiksi_app/public/api/aturan')
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

    const handleChange = (gejalaId: number, adiksi_id: number, cf_user: number, cf_pakar: number, cf_kombinasi: number) => {
        setAnswers((prev) => {
            const exists = prev.find((a) => a.gejala_id === gejalaId);
            if (exists) {
                // Update jika sudah ada
                return prev.map((a) =>
                    a.gejala_id === gejalaId ? { ...a, adiksi_id, cf_user, cf_pakar, cf_kombinasi } : a
                );
            } else {
                // Tambah baru
                return [...prev, { gejala_id: gejalaId, adiksi_id, cf_user, cf_pakar, cf_kombinasi }];
            }
        });
    };

    const handleChangePengguna = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setPengguna((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Pastikan semua pertanyaan sudah dijawab
        if (Object.keys(answers).length !== gejala.length) {
            Swal.fire({
                title:"Harap jawab semua pertanyaan!",
                icon: 'warning'
            });
            return;
        }

        // console.log("Jawaban terkirim:", answers);
        // console.log("Jawaban Pengguna:", pengguna);

        try {
            setIsLoading(true);
            const res = await axios.post("http://localhost/diagnosa_adiksi_app/public/api/form-gejala", {
                answers,
                pengguna
            });

            Swal.fire({
                title:"Diagnosa berhasil dikirim!",
                icon: 'success'
            });
            const penggunaId = res.data.pengguna.id;
            const nama = res.data.pengguna.nama;

            navigate(`/result/${penggunaId}`,{
                state:{
                    nama
                }
            });
        } catch (err: any) {
            if (err.response) {
                // Server memberi respon error (status code 4xx / 5xx)
                console.error("Error response:", err.response.data);
                console.error("Status:", err.response.status);
                console.error("Headers:", err.response.headers);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Error ${err.response.status}: ${err.response.data?.message || "Terjadi kesalahan dari server"}`,
                });
            } else if (err.request) {
                // Request terkirim tapi tidak ada respon
                console.error("Error request:", err.request);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Tidak ada respon dari server. Cek koneksi API`,
                });
            } else {
                // Error lain (misal salah config)
                console.error("Error message:", err.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Kesalahan: " + ${err.message}`,
                });
            }
        } finally {
            setIsLoading(false);
        }
    };


    if (loading) {
        return <p className="text-center font-sans">
            Loading ...
            <span className="loading loading-spinner loading-md"></span>
        </p>;
    }
    if (isLoading) {
        return <p className="">
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
                            <p className="font-sans">{index + 1}. {g.gejala?.nama}?</p>
                            <p className="font-sans"><span className="font-semibold lg:ml-7">Kategori Adiksi:</span> {g.adiksi?.nama}</p>
                            <div className="radio-answer w-full ml-3 mt-3">
                                <ul className="flex flex-wrap gap-4 sm:gap-10 font-sans">
                                    {[
                                        { label: "Tidak Yakin", value: 0 },
                                        { label: "Sedikit Yakin", value: 0.25 },
                                        { label: "Cukup Yakin", value: 0.5 },
                                        { label: "Yakin", value: 0.75 },
                                        { label: "Sangat Yakin", value: 1 }
                                    ].map((opt, idx,) => (
                                        <li key={idx}>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name={`gejala-${g.id}`}
                                                    value={opt.value}
                                                    onChange={() => handleChange(
                                                        g.id,
                                                        g.adiksi.id,
                                                        opt.value,             // cf_user
                                                        g.cf_pakar,            // cf_pakar dari backend
                                                        opt.value * g.cf_pakar // cf_kombinasi (contoh perkalian)
                                                    )}
                                                    checked={answers.find((a) => a.gejala_id === g.id)?.cf_user === opt.value}
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
                        <div onClick={handleSubmit} className="mt-5 cursor-pointer font-semibold text-center text-[#464646] hover:text-white font-sans rounded-full border bg-[#E3F8F8] hover:bg-[#0CC0DF] py-2 px-4">Kirim Diagnosa{isLoading}</div>
                    </div>
                </dialog>
            </form>
        </>
    );
}
