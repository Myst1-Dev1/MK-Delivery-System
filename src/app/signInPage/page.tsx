'use client'

import Link from "next/link"

import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from "../services/hooks/auth/auth";
import { useMutation } from '@tanstack/react-query';
import { queryClient } from "../services/queryClient";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const { signIn, isError } = useContext(AuthContext);
    const { register, handleSubmit, formState:{errors} } = useForm();

    const router = useRouter();

    async function handleSignIn(data:any) {
        try {
            await signIn(data);
            router.refresh();
        } catch (error) {
            console.log('ERROR', error);
        }
    }

    const mutation = useMutation({
        mutationFn:handleSignIn,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({queryKey: ['user']})
        }
    })

    function handleLogin(data:any) {
        mutation.mutate(data);
    }

    return (
        <div className="py-10">
            <h2 className="font-bold text-3xl text-center">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)} className="grid gap-5 grid-cols-1 place-items-center m-auto mt-10 lg:max-w-lg sm: max-w-80">
                <input {...register('email', {required:true})} className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="email" placeholder="Email" id='email' />
                <input {...register('password', {required:true})} className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="Senha" id='password' />
                <span className="text-gray-400 font-semibold">Não possui uma conta? <Link href="/signUpPage" className="text-red-500">Criar conta</Link></span>
                <div className="text-red-600 font-bold">{`${isError}`}</div>
                <button type="submit" className="p-3 w-full rounded-lg text-xl h-14 bg-red-500 text-white hover:bg-red-600 transition-colors">Entrar</button>
            </form>
        </div>
    )
}