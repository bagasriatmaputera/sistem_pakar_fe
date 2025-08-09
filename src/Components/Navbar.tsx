import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm w-full">
            <div className="w-full mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <div className="flex justify-items-center items-center">
                    <img src="/public/assets/AI Check logo.png" alt="logo" width={50} />
                    <a className="btn btn-ghost text-xl">Addiction AI</a>
                </div>
                {/* Menu */}
                <ul className="menu menu-horizontal px-1">
                    <li><a>Login Admin</a></li>
                </ul>
            </div>
        </div>
    );
}