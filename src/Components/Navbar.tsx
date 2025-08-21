import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-xl font-sans">
            <div className="flex items-center justify-between w-full py-[22px] mx-auto">
                <div className="flex justify-center items-center">
                    <Link to={'/'}>
                        <img width={55} src="/public/assets/AI Check logo.png" alt="logo" />
                    </Link>
                    <div className="text-md md:text-xl  font-bold text-[#0CC0DF]">Addcition AI</div>
                </div>
                <a
                    href="https://adiksiai.online"
                    className="flex items-center gap-2 rounded-full border border-[#0CC0DF] 
                    py-3 px-5 font-semibold transition-all duration-300 hover:bg-[#0CC0DF]"
                >
                    <p className="text-md md:text-xl text-[#0CC0DF] hover:text-white">Login Admin</p>
                </a>

            </div>
        </nav>
    );
}