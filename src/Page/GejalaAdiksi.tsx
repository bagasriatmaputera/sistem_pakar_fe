import Footer from "../Components/Footer";
import NavbarMain from "../Components/NavbarMain";

export default function GejalaAdiksiPage() {
    return (
        <>
            <NavbarMain />
            <div className="heading-text my-5 flex justify-center">
                <div className="text-center font-bold text-[#0CC0DF] text-5xl font-sans">
                    Gejala dan Adiksi Kecerdasan Buatan
                </div>
            </div>
            <section className="main font-sans">
                <div className="text-box flex flex-col items-center px-10 lg:px-25">
                    <div id="gejala" className="gejala-text p-1 sm:p-5">
                        <h2 className="font-bold text-[#0CC0DF] text-4xl">Gejala</h2>
                        <p className="text-wrap text-md sm:text-lg xl:text-2xl"> Gejala adalah indicator, tanda, atau ciri yang menunjukan adanya suatu kondisi atau masalah tertentu.
                            Dalam penelitian kali ini, gejala digunakan untuk mengidentifikasikan tingkat kecanduan sesorang khususnya
                            mahasiswa terhadap teknologi AI seperti ChatBot, ChatGPT, Gemini, Meta, dan DeepSeek. Gejala-gejala ini
                            membantu dalam menilai sejauh mana seseorang mengalami dampak buruk akibat penggunaan AI secara berlebihan.</p>
                        <p className="text-wrap text-md sm:text-lg xl:text-2xl">gejala-gejala yang digunakan disusun dan dikelompokkan berdasarkan AI Addiction Scale (AIAS-21)
                            yang dikembangkan oleh Prof. Igor Pantić, dengan penyesuaian terhadap fenomena penggunaan
                            teknologi kecerdasan buatan (AI) di Indonesia. Instrumen AIAS-21 mengkaji kecanduan AI melalui tujuh kategori utama,
                            yaitu <span className="font-semibold">Compulsive Use/Loss of Control, Craving, Tolerance, Withdrawal, Preoccupation/Salience, Continued Use Despite Harm,
                                dan Functional Impairment.</span></p>
                    </div>
                    <div id="adiksi" className="adiksi-text p-1 sm:p-5">
                        <h2 className="font-bold text-[#0CC0DF] text-4xl">Adiksi</h2>
                        <p className="text-wrap text-md sm:text-lg xl:text-2xl">Kategori adiksi merupakan klasifikasi tingkat dan bentuk kecanduan yang dialami individu dalam penggunaan teknologi
                            tertentu, termasuk kecanduan terhadap Artificial Intelligence (AI). Dalam penelitian AIAS-21 (Artificial Intelligence Addiction Scale-21)
                            yang dikembangkan oleh Prof. Igor Pantic, kategori adiksi ini digunakan untuk mengidentifikasi pola perilaku adiktif pengguna terhadap AI,
                            yang mencakup aspek kontrol diri, dorongan keinginan, toleransi, gejala putus, hingga dampak fungsional. Misalnya, pada kategori Compulsive Use
                            atau Loss of Control, individu mengalami kesulitan untuk berhenti meskipun memiliki niat untuk mengurangi, sementara pada kategori Craving, muncul
                            dorongan kuat untuk segera menggunakan AI tanpa bisa menahannya. Selanjutnya, kategori Tolerance menggambarkan kebutuhan pengguna untuk
                            memperpanjang waktu penggunaan agar memperoleh kepuasan yang sama, sedangkan Withdrawal menunjukkan gejala tidak nyaman ketika tidak
                            mengakses AI. Ada pula kategori Preoccupation/Salience yang memperlihatkan pikiran terus-menerus terfokus pada AI, Continued
                            Use Despite Harm di mana penggunaan tetap berlanjut meski dampak negatifnya jelas dirasakan, hingga Functional Impairment
                            yang menandakan gangguan nyata terhadap aktivitas sehari-hari karena kecanduan AI. Dengan demikian, kategori adiksi AIAS-21
                            membantu memberikan pemetaan komprehensif terkait perilaku adiktif
                            pengguna.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}