export default function Footer() {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-[#0CC0DF] text-neutral-content mt-30 p-10">
                <aside>
                    <img src="/public/assets/Brp logo.png" className="max-w-14 max-h-14 rounded-full" alt="Logo-brp.png" />
                    <p className="font-bold font-sans">
                        BRP
                    </p>
                    <p>Copyright @2025</p>
                </aside>
                <nav>
                    <h6 className="text-white text-sans font-bold">SOCIAL</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/bagasriatmap/">
                            <i className="fa-brands fa-linkedin-in fa-lg"></i>
                        </a>
                        <a href="https://github.com/bagasriatmaputera">
                            <i className="fa-brands fa-github fa-bounce fa-lg"></i>
                        </a>
                        <a href="https://wa.me/6283816989642">
                            <i className="fa-brands fa-whatsapp fa-lg"></i>
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    );
}