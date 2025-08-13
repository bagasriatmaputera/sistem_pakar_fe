import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AccordionFaq from "../Components/Accordion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Footer from "../Components/Footer";

export default function BrowsePage() {
    const el = useRef(null);

    // 3. Gunakan useEffect untuk menginisialisasi Typed.js
    useEffect(() => {
        const typed = new Typed(el.current, { // Gunakan ref.current sebagai target
            strings: ['Sistem Pakar', 'Expert System'],
            typeSpeed: 100, // Sedikit diperlambat agar lebih natural
            backSpeed: 30,
            loop: true,
            smartBackspace: true,
            backDelay: 3000
        });

        // 4. Penting: Hancurkan instance saat komponen dilepas (unmount)
        //    untuk mencegah memory leak
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <Navbar />
            <header className="flex flex-col w-full">
                <section id="Hero-Banner" className="relative flex h-[720px] -mb-[93px]">
                    {/* Hero Text */}
                    <div
                        id="Hero-Text"
                        className="relative shadow-xl flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10"
                    >
                        <div className="flex items-center w-fit rounded-full py-2 px-4 gap-[10px] bg-[#000929]">
                            <span className="font-semibold text-white">
                                Sistem Diagnosa Adiksi AI Teruji
                            </span>
                        </div>

                        <h1 className="font-extrabold text-[50px] text-black-500 leading-[60px]">
                            Diagnosa Cepat,
                            <br />
                            Adiksi Pada AI.
                        </h1>

                        <p className="text-lg leading-8 text-[#000929]">
                            Menggunakan metode Certainty Factor untuk memberikan hasil diagnosa yang akurat dalam hitungan detik, berdasarkan penelitian dan pengujian lapangan.
                        </p>

                        <div className="flex items-center gap-5">
                            <Link to={'/faq'}>
                                <div
                                    className="flex items-center rounded-full p-[20px_26px] gap-3 bg-[#0CC0DF]"
                                >
                                    <span className="font-bold text-xl leading-[30px] text-[#F7F7FD]">
                                        Mulai Diagnosa
                                    </span>
                                </div>
                            </Link>
                            <a
                                href="https://kantinit.com/kecerdasan-buatan/certainty-factor-cf-defenisi-fungsi-rumus-dan-penerapannya/"
                                className="flex items-center rounded-full border border-[#000929] p-[20px_26px] gap-3 bg-white"
                            >
                                <span className="font-semibold text-xl leading-[30px]">
                                    Pelajari Metode
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div
                        id="Hero-Image"
                        className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[720px] rounded-bl-[40px] overflow-hidden"
                    >
                        <img
                            src="/public/assets/caraousel/hero4.jpg"
                            className="w-full h-full object-cover"
                            alt="AI Diagnosis Background"
                        />
                    </div>
                </section>

                {/* Statistik */}
                <div className="flex flex-col pt-[150px] pb-10 px-[120px] gap-10 bg-[#0CC0DF]">
                    <div className="projek flex flex-col justify-center p-2 m-2 items-center">
                        <p className="text-xl font-sans text-white">PROJEK SKRIPSI</p>
                        <p className="sistem-pakar text-7xl font-bold border p-3 rounded-full text-white px-10"><span ref={el}></span></p>
                    </div>
                </div>
            </header>
            <AccordionFaq />
            <Footer/>
        </>
    );
}