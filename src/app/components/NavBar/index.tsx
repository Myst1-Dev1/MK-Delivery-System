import { FaClipboardList, FaHome, FaPhone, FaUser } from "react-icons/fa";
import { ActiveLink } from "../ActiveLink";

export function NavBar() {
    return (
        <nav className="border border-t-gray-300 bg-white z-10 fixed bottom-0 left-0 right-0 grid place-items-center grid-cols-4 lg:py-5 sm: py-3">
            <div className="flex gap-2 items-center lg:flex-row sm: flex-col">
                <FaHome className="lg:text-xl sm:text-xs text-gray-400" />
                <ActiveLink href="/">Início</ActiveLink>
            </div>
            <div className="flex gap-2 items-center lg:flex-row sm: flex-col">
                <FaUser className="lg:text-xl sm:text-xs text-gray-400" />
                <ActiveLink href="/profile">Perfil</ActiveLink>
            </div>
            <div className="flex gap-2 items-center lg:flex-row sm: flex-col">
                <FaClipboardList className="lg:text-xl sm:text-xs text-gray-400" />
                <ActiveLink href="/orders">Pedidos</ActiveLink>
            </div>
            <div className="flex gap-2 items-center lg:flex-row sm: flex-col">
                <FaPhone className="lg:text-xl sm:text-xs text-gray-400" />
                <ActiveLink href="/contact">Contato</ActiveLink>
            </div>
        </nav>
    )
}