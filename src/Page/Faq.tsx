import { Link } from "react-router-dom";
import NavbarMain from "../Components/NavbarMain";
import Footer from "../Components/Footer";

export default function FaqPage() {
    return (
        <>
            <NavbarMain />
            <section className="steps my-10 flex flex-col justify-center items-center">
                <ul className="steps gap-3">
                    <li className="step step-info">Informasi<br />Tes</li>
                    <li className="step">Pertanyaan<br />Tes</li>
                    <li className="step">Hasil<br />Diagnosa</li>
                </ul>
            </section>
            <section className="faq w-full flex flex-col justify-center items-center my-20">
                <div className="bg-base-200 rounded-sm mx-20 py-2 w-2/3">
                    <p
                        className="text-5xl text-center text-[#0CC0DF] font-mono font-bold font-medium">
                        Pertanyaan yang Sering <br /> Diajukan - FAQ
                    </p>
                    <div className="accordion my-8 md:px-5 lg:px-10 w-full font-sans">
                        <div className="collapse bg-base-100 border border-base-300 py-10  ">
                            <input type="checkbox" name="my-accordion-1" defaultChecked />
                            <div className="collapse-title font-bold text-2xl text-[#0CC0DF]">Apa Itu Addiction AI Check?</div>
                            <div className="collapse-content text-xl">
                                Addiction AI Check adalah sistem berbasis kecerdasan buatan yang dirancang untuk mendeteksi tingkat potensi
                                adiksi terhadap penggunaan AI. Sistem ini menggunakan metode Certainty Factor untuk menghitung tingkat
                                keyakinan diagnosa secara cepat, akurat, dan berbasis data hasil penelitian serta pengujian lapangan.
                            </div>
                        </div>
                        <div className="collapse bg-base-100 border border-base-300 py-10 ">
                            <input type="checkbox" name="my-accordion-1" />
                            <div className="collapse-title font-bold text-2xl text-[#0CC0DF]">Siapa yang bisa mengakses Addiction AI Check?</div>
                            <div className="collapse-content text-xl">
                                Addiction AI Check dapat digunakan oleh siapa saja, mulai dari individu, pendidik, hingga instansi yang ingin memahami tingkat potensi adiksi terhadap teknologi AI.
                                Aksesnya dapat dilakukan secara online, tanpa memerlukan perangkat khusus, sehingga mudah digunakan oleh berbagai kalangan.
                            </div>
                        </div>
                        <div className="collapse bg-base-100 border border-base-300 py-10   ">
                            <input type="checkbox" name="my-accordion-1" />
                            <div className="collapse-title font-bold text-2xl text-[#0CC0DF]">Apakah Hasil Dari Addiction AI Check dapat diandalkan?</div>
                            <div className="collapse-content text-xl">
                                Ya. Hasil yang diberikan oleh Addiction AI Check memiliki tingkat akurasi tinggi berkat penerapan metode Certainty Factor yang telah diuji menggunakan dataset penelitian. Meskipun hasilnya dapat dijadikan acuan,
                                tetap disarankan untuk menggunakannya sebagai bagian dari analisis menyeluruh dan bukan satu-satunya dasar pengambilan keputusan.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-2">
                    <Link to={'/'}>
                        <div
                            className="flex items-center rounded-bl-xl p-[10px_16px] hover:p-[20px_26px]
                        transition duration-300 ease-in-out gap-3 bg-[#0CC0DF]"
                        >
                            <span className="font-bold text-md leading-[30px] text-[#F7F7FD]">
                                Kembali
                            </span>
                        </div>
                    </Link>
                    <Link to={'/form-gejala'}>
                        <div
                            className="flex items-center rounded-br-xl p-[10px_16px] hover:p-[20px_26px]
                        transition duration-300 ease-in-out gap-3 bg-[#0CC0DF]"
                        >
                            <span className="font-bold text-md leading-[30px] text-[#F7F7FD]">
                                Mulai Diagnosa
                            </span>
                        </div>
                    </Link>
                </div >
            </section >
            <Footer/>
        </>
    );
}