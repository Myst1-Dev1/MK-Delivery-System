'use client'

import { ReactNode, createContext, useContext, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import { useRouter } from "next/navigation";
import { login } from "../../axios";

type AuthProviderProps = {
    children:ReactNode | any
}

type SignInData = {
    email:string;
    password:string;
}

type AuthContextData = {
    isAuthenticated: boolean,
    signIn:(data: SignInData) => Promise<void>;
    isError:string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }:AuthProviderProps) {
    const [isError, setIsError] = useState('');


    const router = useRouter();

    const { 'mk-delivery.token': tokenExists } = parseCookies();

    const isAuthenticated = !!tokenExists;

   

    async function signIn({ email, password }: SignInData) {
        try {
            const res = await login(email, password);
            
            if (res.status === 200) {
                const token = res.data.access_token

                setCookie(undefined, 'mk-delivery.token', token, {
                    maxAge: 60 * 60 * 2 // 2 hours
                })

                router.push('/');

            } else {
                console.log('Erro no login:', res.data);
            }
        } catch (error:any) {
            console.error('Erro durante o login:', error);
            setIsError(error.response.data.message);
        }
    }

    return (
        <AuthContext.Provider value={{signIn, isAuthenticated, isError }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useLoggedUserData() {
    const context = useContext(AuthContext);

    return context;
}