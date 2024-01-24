'use client'

import { UserProfile } from '../../../../app/types/UserProfile';
import { useContext, createContext, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../axios';
import { parseCookies } from 'nookies';

type UserProviderProps = {
    children:ReactNode;
}

type UserContextData = {
    user:UserProfile[] | any;
    isLoading:boolean;
    token:any;
}

export const UserContext = createContext(
    {} as UserContextData );

export function UserProvider({children}:UserProviderProps) {
    const {'mk-delivery.token': token} = parseCookies();

    // async function getAllUser() {
    //     try {
    //         const res = await api.get('users', {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 Authorization: `Bearer ${token}`,
    //                 'Access-Control-Allow-Origin': '*'
    //             }
    //         });
            
    //         return res.data;
    //     } catch (error) {
    //         console.error("Erro na requisição:", error);
    //         throw error;
    //     }
    // };

    async function getUserData() {
        try {
            const res = await api.get('login', {
                headers: {
                    'Accept': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });
            
            return res.data;
        } catch (error) {
            console.error("Erro na requisição:", error);
            throw error;
        }
    }

    const { data:user, isLoading } = useQuery({
        queryKey:['user'],
        queryFn:getUserData
    })


    return (
        <UserContext.Provider value={{ user, isLoading, token }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);

    return context;
}