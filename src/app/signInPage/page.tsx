'use client'

import Link from "next/link"

export default function SignInPage() {
    return (
        <div className="py-10">
            <h2 className="font-bold text-3xl text-center">Login</h2>
            <form className="grid gap-5 grid-cols-1 place-items-center m-auto mt-10 lg:max-w-lg sm: max-w-80">
                <input className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="email" placeholder="Email" />
                <input className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="Senha" />
                <span className="text-gray-400 font-semibold">Não possui uma conta? <Link href="/signUpPage" className="text-red-500">Criar conta</Link></span>
                <button className="p-3 w-full rounded-lg text-xl h-14 bg-red-500 text-white hover:bg-red-600 transition-colors">Entrar</button>
            </form>
        </div>
    )
}