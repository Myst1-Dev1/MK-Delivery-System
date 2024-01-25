'use client'

import Link from "next/link"

import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from "../services/hooks/auth/auth";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const { signIn, isError } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const router = useRouter();

    async function handleLogin(data:any) {
        await signIn(data);
        router.refresh();
    }

    return (
        <div className="py-10 mb-16">
            <h2 className="font-bold text-3xl text-center">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)} className="grid gap-5 grid-cols-1 place-items-center m-auto mt-10 lg:max-w-lg sm: max-w-80">
                <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="email">Email</label>
                    <input {...register('email', {required:true})} className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="email" placeholder="johndoe@gmail.com" id='email' />
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="password">Senha</label>
                    <input {...register('password', {required:true})} className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="******" id='password' />
                </div>
                <span className="text-gray-400 font-semibold">Não possui uma conta? <Link href="/signUpPage" className="text-red-500">Criar conta</Link></span>
                <div className="text-red-600 font-bold">{`${isError}`}</div>
                <button type="submit" className="p-3 w-full rounded-lg text-xl h-14 bg-red-500 text-white hover:bg-red-600 transition-colors">Entrar</button>
            </form>
        </div>
    )
}