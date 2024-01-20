'use client'

import Link from "next/link"

import { useForm } from 'react-hook-form';
import { api } from "../services/axios";
import { SignUpData } from "../types/SignUpData";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const [isError , setIsError] = useState('')

    const router = useRouter();

    async function signUp({name, email, tel, password, password_confirmation}:SignUpData) {
        try {
            const res = await api.post('users', {
              name,
              email,
              tel,
              password,
              password_confirmation
            }, {
                headers:{
                    'Accept': 'application/json'
                }
            });
    
            if(res.status === 201) {
                console.log('Conta criada com sucesso', res.data);
                router.push('/signInPage');
            }
            else {
                console.log('Erro', res.data);
            }
          } catch (error:any) {
            console.log('Erro na criação da conta', error);
            setIsError(error.response.data.message);
          }
    }

    async function handleSignUp(data:any) {
        await signUp(data);
    }

    return (
        <div className="py-10 mb-20">
            <h2 className="font-bold text-3xl text-center">Cadastro</h2>
            <form onSubmit={handleSubmit(handleSignUp)} className="grid gap-5 grid-cols-1 place-items-center m-auto mt-10 lg:max-w-lg sm: max-w-80">
                <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                    <div className="flex flex-col gap-3 w-full">
                        <label htmlFor="name">Nome</label>
                        <input {...register('name', {required:true})} className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="text" placeholder="John" id="name" />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <label htmlFor="email">Email</label>
                        <input {...register('email', {required:true})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="email" placeholder="johndoe@gmail.com" id="email" />
                    </div>
                </div>
                 <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="tel">Telefone</label>
                    <input {...register('tel', {required:true})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="tel" placeholder="Telefone" id="tel" />
                </div>
                <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                    <div className="flex flex-col gap-3 w-full">
                        <label htmlFor="password">Senha</label>
                        <input {...register('password', {required:true})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="******" id="password" />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <label htmlFor="passwordConfimation">Confirme a Senha</label>
                        <input {...register('password_confirmation', {required:true})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="******" id="passwordConfirmation" />
                    </div>
                </div>
                <div className="text-red-600 text-center font-bold">{`${isError}`}</div>
                <span className="text-gray-400 font-semibold">Já possui uma conta? <Link href="/signInPage" className="text-red-500">Entrar</Link></span>
                <button type="submit" className="p-3 w-full rounded-lg text-xl h-14 bg-red-500 text-white hover:bg-red-600 transition-colors">Cadastrar</button>
            </form>
        </div>
    )
}