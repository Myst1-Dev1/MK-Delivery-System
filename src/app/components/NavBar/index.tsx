import { FaClipboardList, FaHome, FaPhone, FaUser } from "react-icons/fa";

export function NavBar() {
    return (
        <nav className="border border-t-gray-300 bg-white z-10 fixed py-5 bottom-0 left-0 right-0 grid place-items-center grid-cols-4">
            <div className="flex gap-2 items-center lg:flex-row sm: flex-col">
                <FaHome className="lg:text-xl sm:text-xs text-gray-400" />
                <a className="lg:text-xl sm:text-xs hover:text-red-500 transition-colors" href="/">Início</a>
            </div>
            <div className="flex gap-2 items-center lg:flex-row sm: flex-col">
                <FaUser className="lg:text-xl sm:text-xs text-gray-400" />
                <a className="lg:text-xl sm:text-xs hover:text-red-500 transition-colors" href="/">Perfil</a>
            </div>
            <div className="flex gap-2 items-center lg:flex-row sm: flex-col">
                <FaClipboardList className="lg:text-xl sm:text-xs text-gray-400" />
                <a className="lg:text-xl sm:text-xs hover:text-red-500 transition-colors" href="/">Pedidos</a>
            </div>
            <div className="flex gap-2 items-center lg:flex-row sm: flex-col">
                <FaPhone className="lg:text-xl sm:text-xs text-gray-400" />
                <a className="lg:text-xl sm:text-xs hover:text-red-500 transition-colors" href="/">Contato</a>
            </div>
        </nav>
    )
}