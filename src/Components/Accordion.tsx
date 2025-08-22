export default function AccordionFaq() {
    return (
        <section className="faq w-full flex flex-col justify-center items-center my-20">
            <p className="text-4xl text-center font-medium underline">Pertanyaan yang Sering Diajukan - FAQ</p>
            <div className="accordion px-5 my-8 md:px-20 lg:px-30 w-full">
                <div className="collapse bg-base-100 py-7 px-3 border border-base-300">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold text-xl text-[#0CC0DF]">Apa Itu Addiction AI Check?</div>
                    <div className="collapse-content text-xl">
                        Addiction AI Check adalah sistem berbasis kecerdasan buatan yang dirancang untuk mendeteksi tingkat potensi
                        adiksi terhadap penggunaan AI. Sistem ini menggunakan metode Certainty Factor untuk menghitung tingkat
                        keyakinan diagnosa secara cepat, akurat, dan berbasis data hasil penelitian serta pengujian lapangan.
                    </div>
                </div>
                <div className="collapse bg-base-100 py-7 px-3 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold text-xl text-[#0CC0DF]">Siapa yang bisa mengakses Addiction AI Check?</div>
                    <div className="collapse-content text-xl">
                        Addiction AI Check dapat digunakan oleh siapa saja, mulai dari individu, pendidik, hingga instansi yang ingin memahami tingkat potensi adiksi terhadap teknologi AI.
                        Aksesnya dapat dilakukan secara online, tanpa memerlukan perangkat khusus, sehingga mudah digunakan oleh berbagai kalangan.
                    </div>
                </div>
                <div className="collapse bg-base-100 py-7 px-3 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold text-xl text-[#0CC0DF]">Apakah Hasil Dari Addiction AI Check dapat diandalkan?</div>
                    <div className="collapse-content text-xl">
                        Ya. Hasil yang diberikan oleh Addiction AI Check memiliki tingkat akurasi tinggi berkat penerapan metode Certainty Factor yang telah diuji menggunakan dataset penelitian. Meskipun hasilnya dapat dijadikan acuan,
                        tetap disarankan untuk menggunakannya sebagai bagian dari analisis menyeluruh dan bukan satu-satunya dasar pengambilan keputusan.
                    </div>
                </div>
            </div>
        </section>
    );
}