'use client'

import Link from "next/link"

export default function SignUpPage() {
    return (
        <div className="py-10">
            <h2 className="font-bold text-3xl text-center">Cadastro</h2>
            <form className="grid gap-5 grid-cols-1 place-items-center m-auto mt-10 lg:max-w-lg sm: max-w-80">
                <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                    <input className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="text" placeholder="Nome" />
                    <input className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="email" placeholder="Email" />
                </div>
                <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                    <input className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="text" placeholder="Endereço" />
                    <input className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="tel" placeholder="Telefone" />
                </div>
                <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                <input className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="Senha" />
                <input className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="Confirme senha" />
                </div>
                <span className="text-gray-400 font-semibold">Já possui uma conta? <Link href="/signInPage" className="text-red-500">Entrar</Link></span>
                <button className="p-3 w-full rounded-lg text-xl h-14 bg-red-500 text-white hover:bg-red-600 transition-colors">Entrar</button>
            </form>
        </div>
    )
}