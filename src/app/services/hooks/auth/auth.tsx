'use client'

import { ReactNode, createContext, useContext } from "react";
import { setCookie, parseCookies } from 'nookies';
import { login, tokenVerify } from "../../axios";

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
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }:AuthProviderProps) {
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

        if(res.status === 201) {
            const tokenGenerated = `${res.headers['auth-token']}`;
            setCookie(undefined, 'mk-delivery.token', tokenGenerated, {
                maxAge: 60 * 60 * 2 // 2 hours
            });
            
            await validateToken();
            console.log(res.data);
        }
         else {
            console.log('Erro no login');
        }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useLoggedUserData() {
    const context = useContext(AuthContext);

    return context;
}