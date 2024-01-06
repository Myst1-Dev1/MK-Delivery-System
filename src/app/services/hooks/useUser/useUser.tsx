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
    data:UserProfile[];
    isLoading:boolean;
}

export const UserContext = createContext(
    {} as UserContextData );

export function UserProvider({children}:UserProviderProps) {
    const {'mk-delivery.token': token} = parseCookies();

    async function getUser() {
        const res = await api.get('/user/profile',{
            headers: {
                'auth-token':token
            }
        });
        
        return res.data;
    };

    const { data, isLoading } = useQuery({
        queryKey:['user'],
        queryFn:getUser
    })

    return (
        <UserContext.Provider value={{ data, isLoading }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);

    return context;
}