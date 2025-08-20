import { HashLink as Link } from 'react-router-hash-link';

export default function NavbarMain() {
    return (
        <nav className="bg-white shadow-xl font-sans">
            <div className="flex items-center justify-between w-full py-[22px] mx-auto">
                <div className="flex justify-center items-center">
                    <Link to={'/'}>
                        <img width={55} src="/public/assets/AI Check logo.png" alt="logo" />
                    </Link>
                    <div className="text-md lg:text-xl font-bold text-[#0CC0DF]">Addcition AI</div>
                </div>
                <ul className="hidden sm:flex font-sans text-md lg:text-xl items-center gap-[50px] w-fit">
                    <li>
                        <Link smooth to="/" ><p
                            className="hover:font-bold hover:text-[#0CC0DF] hover:underline transition-all duration-300">Home</p></Link>
                    </li>
                    <li>
                        {/* Pastikan Anda memiliki route untuk /gejala */}
                        <Link smooth to="/pengertian/#gejala" ><p
                            className="hover:font-bold hover:text-[#0CC0DF] hover:underline transition-all duration-300">Gejala</p></Link>
                    </li>
                    <li>
                        {/* Pastikan Anda memiliki route untuk /adiksi */}
                        <Link smooth to="/pengertian/#adiksi" ><p
                            className="hover:font-bold hover:text-[#0CC0DF] hover:underline transition-all duration-300">Adiksi</p></Link>
                    </li>
                </ul>
                {/* hiiden for mobile */}
                <details className="dropdown dropdown-end sm:hidden">
                    <summary className="btn m-1 rounded-full"></summary>
                    <ul className="dropdown-content bg-[#E3F8F8] rounded-box z-1 w-52 p-2 shadow-sm">
                        <li className="p-2 mx-3 ">
                            <Link to="/" ><p
                                className="font-sans hover:font-bold hover:underline hover:text-white transition-all duration-300">Home</p></Link>
                        </li>
                        <li className="p-2 mx-3 ">
                            {/* Pastikan Anda memiliki route untuk /gejala */}
                            <Link smooth to="/pengertian/#gejala" ><p
                                className="font-sans hover:font-bold hover:underline hover:text-white transition-all duration-300">Gejala</p></Link>
                        </li>
                        <li className="p-2 mx-3 ">
                            {/* Pastikan Anda memiliki route untuk /adiksi */}
                            <Link smooth to="/pengertian/#adiksi" ><p
                                className="font-sans hover:font-bold hover:underline hover:text-white transition-all duration-300">Adiksi</p></Link>
                        </li>
                        <li className="p-2 mx-3 ">
                            {/* Pastikan Anda memiliki route untuk /adiksi */}
                            <Link to="https://adiksiai.online" ><p
                                className="font-sans hover:font-bold hover:underline hover:text-white transition-all duration-300">Login Admin</p></Link>
                        </li>
                    </ul>
                </details>
                <a
                    href="http://127.0.0.1:8000/admin"
                    className="hidden sm:flex items-center gap-2 rounded-full border border-[#0CC0DF] 
                    py-2 px-4 m-3 font-semibold transition-all duration-300 hover:bg-[#0CC0DF]"
                >
                    <p className="text-md lg:text-xl text-[#0CC0DF] hover:text-white">Login Admin</p>
                </a>

            </div>
        </nav>
    );
}