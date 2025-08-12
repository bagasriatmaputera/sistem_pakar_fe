import { Link } from "react-router-dom";

export default function NavbarMain() {
    return (
        <nav className="bg-white shadow-xl">
            <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
                <div className="flex justify-center items-center">
                    <Link to={'/'}>
                        <img width={55} src="/public/assets/AI Check logo.png" alt="logo" />
                    </Link>
                    <div className="text-xl font-bold text-[#0CC0DF]">Addcition AI</div>
                </div>
                <ul className="flex items-center gap-[50px] w-fit">
                    <li>
                        <Link to="/" ><p 
                        className="hover:font-bold hover:text-[#0CC0DF] hover:underline transition-all duration-300">Home</p></Link>
                    </li>
                    <li>
                        {/* Pastikan Anda memiliki route untuk /gejala */}
                        <Link to="/gejala" ><p 
                        className="hover:font-bold hover:text-[#0CC0DF] hover:underline transition-all duration-300">Gejala</p></Link>
                    </li>
                    <li>
                        {/* Pastikan Anda memiliki route untuk /adiksi */}
                        <Link to="/adiksi" ><p 
                        className="hover:font-bold hover:text-[#0CC0DF] hover:underline transition-all duration-300">Adiksi</p></Link>
                    </li>
                </ul>
                <a
                    href="#"
                    className="flex items-center gap-2 rounded-full border border-[#0CC0DF] 
                    py-3 px-5 font-semibold transition-all duration-300 hover:bg-[#0CC0DF]"
                >
                    <p className=" text-[#0CC0DF] hover:text-white">Login Admin</p>
                </a>

            </div>
        </nav>
    );
}