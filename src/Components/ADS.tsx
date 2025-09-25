import { X } from "lucide-react";
import { useState } from "react";

export default function TopBanner() {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
        <div className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white text-sm font-medium px-4 py-2 flex items-center justify-between shadow-md">
            <p className="flex text-center w-full">
                🎁 Dapatkan Rp30.000 dengan memberikan feedback melalui link berikut 👉{""}
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdpyw6-AX3U79eeD0DrfGuukEPp2a8rgyOoTHhfjwcIh023ow/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold hover:text-yellow-200"
                >
                    Klik di sini
                </a>
            </p>
            <button
                onClick={() => setShow(false)}
                className="ml-4 p-1 rounded-full hover:bg-white/20 transition"
            >
                <X size={16} />
            </button>
        </div>
    );
}
