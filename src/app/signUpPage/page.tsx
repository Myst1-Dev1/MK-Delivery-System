'use client'

import Link from "next/link"

import { useForm } from 'react-hook-form';
import { api } from "../services/axios";
import { SignUpData } from "../types/SignUpData";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const router = useRouter();

    async function signUp({firstname, lastname, email, tel, password, isAdmin = false}:SignUpData) {
        try {
            const res = await api.post('/register', {
              firstname,
              lastname,
              email,
              tel,
              password,
              isAdmin
            }, {
                headers:{
                    'Content-Type': 'application/json'
                }
            });
    
            if(res.status === 200) {
                console.log('Conta criada com sucesso', res.data);
                router.push('/signInPage');
            }
            else {
                console.log('Erro na criação da conta')
            }
          } catch (error) {
            console.log('Erro na criação da conta', error);
          }
    }

    async function handleSignUp(data:any) {
        await signUp(data);
    }

    return (
        <div className="py-10">
            <h2 className="font-bold text-3xl text-center">Cadastro</h2>
            <form onSubmit={handleSubmit(handleSignUp)} className="grid gap-5 grid-cols-1 place-items-center m-auto mt-10 lg:max-w-lg sm: max-w-80">
                <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                    <input {...register('firstname', {required:true})} className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="text" placeholder="Primeiro nome" id="firstname" />
                    <input {...register('lastname', {required:true})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="text" placeholder="Último nome" id="lastname" />
                </div>
                <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                    <input {...register('email', {required:true})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="email" placeholder="Email" id="email" />
                    <input {...register('tel', {required:true})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="tel" placeholder="Telefone" id="tel" />
                </div>
                <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                <input {...register('password', {required:true})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="Senha" id="password" />
                <input {...register('passwordConfirmation', {required:true})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="Confirme senha" id="passwordConfirmation" />
                </div>
                <span className="text-gray-400 font-semibold">Já possui uma conta? <Link href="/signInPage" className="text-red-500">Entrar</Link></span>
                <button type="submit" className="p-3 w-full rounded-lg text-xl h-14 bg-red-500 text-white hover:bg-red-600 transition-colors">Cadastrar</button>
            </form>
        </div>
    )
}