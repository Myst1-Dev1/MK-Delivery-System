import { NavBar } from "../NavBar";

export function Header() {
    return (
        <>
            <div className="container m-auto mt-3 flex justify-between items-center sm: px-3">
                <h1 className="font-bold lg:text-3xl sm:text-xl">M&K Delivery</h1>
                <div className="flex gap-4 items-center">
                    <h2 className="text-red-600 lg:text-xl sm:text-normal">Criar conta</h2>
                    <button className="bg-red-600 rounded-lg text-white font-bold flex justify-center items-center hover:bg-red-800 transition-colors lg:p-3 w-24 h-10 sm:p-2">Entrar</button>
                </div>
            </div>
            <NavBar />
        </>
    )
}