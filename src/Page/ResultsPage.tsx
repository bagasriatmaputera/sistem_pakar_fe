import { Link, useLocation, useParams } from "react-router-dom";
import NavbarMain from "../Components/NavbarMain";
import { useEffect, useState } from "react";
import type { Hasil } from "../Types/Type";
import axios from "axios";
import Footer from "../Components/Footer";
import jsPDF from "jspdf";

export default function ResultsPage() {
    const { id } = useParams<{ id: string }>();
    const pengguna = useLocation()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hasil, setHasil] = useState<Hasil[]>([])
    // jspdf
    const downloadPDF = (pengguna: any, hasil: any[]) => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        let y = 20;

        doc.setFontSize(16);
        doc.text("Hasil Diagnosa", pageWidth / 2, y, { align: "center" });

        y += 10;
        doc.setFontSize(12);
        doc.text(`Nama: ${pengguna.nama}`, 10, y);
        y += 8;
        doc.text(
            `Tanggal: ${new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })}`,
            10,
            y
        );

        y += 12;
        doc.setFontSize(14);
        doc.text("3 Kategori Adiksi Tertinggi:", 10, y);

        hasil
            .sort((a, b) => b.cf_final - a.cf_final)
            .slice(0, 3)
            .forEach((item, index) => {
                y += 10;
                doc.setFontSize(12);
                doc.text(`${index + 1}. ${item.adiksi.nama}`, 10, y);

                y += 7;
                doc.text(`CF Final: ${item.cf_final}%`, 15, y);

                y += 7;
                // Deskripsi
                let deskripsi = doc.splitTextToSize(
                    `Deskripsi: ${item.adiksi.deskripsi}`,
                    pageWidth - 20
                );
                doc.text(deskripsi, 15, y);
                y += deskripsi.length * 6;

                // Solusi
                let solusi = doc.splitTextToSize(
                    `Solusi: ${item.adiksi.solusi}`,
                    pageWidth - 20
                );
                doc.text(solusi, 15, y);
                y += solusi.length * 6;
            });

        doc.save(`Addiction AI -${pengguna.nama} .pdf`);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost/diagnosa_adiksi_app/public/api/hasil/${id}`);
                setLoading(false);
                setHasil(res.data.data);
            } catch (error: any) {
                setError(error);
                alert(`Error ${error.response?.status}: ${error.response?.data?.message || "Terjadi kesalahan dari server"}`);
            }
        };

        fetchData();
    }, [id]);

    // console.log('Data Hasil:', hasil)
    // console.log('Data Pengguna:', pengguna)

    if (loading) {
        return <p className="text-center font-sans">
            Loading ...
            <span className="loading loading-spinner loading-md"></span>
        </p>;
    }
    if (error) {
        return <p className="text-center font-sans">
            Error{error}
            <span className="loading loading-spinner loading-md"></span>
        </p>;
    }
    return (
        <div className="w-full">
            <NavbarMain />
            <div className="heading-text my-5 flex justify-center">
                <div className="text-center font-bold text-[#0CC0DF] text-5xl font-sans">
                    Hasil Diagnosa
                </div>
            </div>
            <section className="steps my-10 flex flex-col justify-center items-center">
                <ul className="steps gap-3">
                    <li data-content="✓" className="step step-info">Informasi<br />Tes</li>
                    <li data-content="✓" className="step step-info">Pertanyaan<br />Tes</li>
                    <li className="step step-info">Hasil<br />Diagnosa</li>
                </ul>
            </section>
            <section className="Hasil">
                {/* Hasil Perhitungan */}
                <div className="flex justify-center align-center md:w-full mb-20">
                    <div className="overflow-x-auto">
                        <table className="table table-xs sm:table-lg lg:table-xl">
                            {/* head */}
                            <thead>
                                <tr className="text-xl font-sans">
                                    <th>No</th>
                                    <th >Nama Adiksi</th>
                                    <th>CF Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hasil.map((item, index) => (
                                    <tr key={item.id_hasil}>
                                        <th>{index + 1}</th>
                                        <td >{item.adiksi.nama ?? "-"}</td>
                                        <td className={item.cf_final > 60 ? "font-bold text-base sm:text-xl" : ""}>
                                            {item.cf_final} %
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Diagnosa up to 50% */}
                <div className="w-full flex flex-col justify-center px-5 sm:px-20">
                    <p className="text-base sm:text-xl lg:text-2xl">Berdasarkan hasil perhitungan Certainty Factor, tingkat kemungkinan kecanduan
                        yang dialami oleh <span className="font-bold">{pengguna.state.nama}</span> dapat dilihat pada tabel berikut:</p>
                    {/* table diagnosa */}
                    <div className="overflow-x-auto flex justify-center align-items  my-5 sm:my-10">
                        <table className="table table-xs sm:table-lg lg:table-xl table-zebra border border-base-content/5 bg-base-100 table-pin-rows table-pin-cols">
                            {/* head */}
                            <thead>
                                <tr className="text-xl font-sans">
                                    <th>Kategori</th>
                                    <th>Deskripsi</th>
                                    <th>Solusi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hasil
                                    ?.sort((a, b) => b.cf_final - a.cf_final) // urutkan desc
                                    .slice(0, 3) // ambil 3 teratas
                                    .map((item) => (
                                        <tr key={item.id_hasil}>
                                            <td className="font-semibold">{item.adiksi?.nama ?? "-"}</td>
                                            <td>{item.adiksi.deskripsi}</td>
                                            <td className="w-1/2">
                                                {item.adiksi.solusi}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="button-finsih flex justify-center mx-auto gap-2">
                        <Link to={'/'}>
                            <div className="cursor-pointer font-semibold text-center text-[#464646] hover:text-white
                            font-sans rounded-full border bg-[#E3F8F8] hover:bg-[#0CC0DF] py-3 lg:py-5 px-4">
                                <i className="fa-solid fa-backward"></i> Kembali</div>
                        </Link>
                        <div onClick={() => downloadPDF(pengguna.state, hasil)} className="cursor-pointer font-semibold text-center text-[#464646] hover:text-white
                            font-sans rounded-full border bg-[#E3F8F8] hover:bg-[#0CC0DF]  py-3 lg:py-5 px-4">
                            <i className="fa-regular fa-circle-down"></i> PDF</div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}