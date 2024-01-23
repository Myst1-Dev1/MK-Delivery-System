import axios from 'axios';

export const api = axios.create({
    baseURL:'https://api.digitallabor.com.br/api/v1/',
});

export async function login(email:string, password:string) {
    const res = await api.post('login', {email, password}, {
        headers:{
            'Accept': 'application/json'
        }
    });
    return res;
}

export async function getProductsData(pageNumber = 1) {
    try {
        const { data, status } = await api.get(`products?page=${pageNumber}`);

        if(status === 200) return data;

    } catch (error) {
        console.log(error);
    }
}