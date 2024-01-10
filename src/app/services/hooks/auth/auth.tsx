'use client'

import { ReactNode, createContext, useContext, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import { login, tokenVerify } from "../../axios";
import { useRouter } from "next/navigation";

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

    async function validateToken() {
        if (tokenExists) {
          const tk = { token: tokenExists };
          const userData = await tokenVerify(tk);
          if (userData.data !== undefined) {
            console.log('Token gerado com sucesso')
            return userData.data;
          }
        }
    }
    
    async function signIn({ email, password }: SignInData) {
        try {
            const res = await login(email, password);
    
            if (res.status === 201) {
                const tokenGenerated = `${res.headers['auth-token']}`;
                setCookie(undefined, 'mk-delivery.token', tokenGenerated, {
                    maxAge: 60 * 60 * 2 // 2 hours
                });
    
                await validateToken();
                console.log('Login bem-sucedido:', res.data);

                router.push('/');
            } else {
                console.log('Erro no login:', res.data);
            }
        } catch (error:any) {
            console.error('Erro durante o login:', error);
            setIsError(error.response.data);
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, isError }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useLoggedUserData() {
    const context = useContext(AuthContext);

    return context;
}