import axios from 'axios';

export const api = axios.create({
    baseURL:'http://localhost:8888/api',
});

export async function tokenVerify (token: object | any) {
    const res = await api.post('/tokenVerify', token)
    return res;
};

export async function login ( email: string, password: string ) {
    const res = await api.post('/login', { email, password });
    return res;
};