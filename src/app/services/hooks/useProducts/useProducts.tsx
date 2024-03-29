'use client'

import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, ReactNode, useState } from 'react';
import { api, getProductsData } from '../../axios';
import { Products } from '../../../../app/types/Products';
import { parseCookies } from 'nookies';

type ProductsProviderProps = {
    children: ReactNode;
}

type ProductContextData = {
    products: any;
    isLoading:boolean;
    filter:any;
    setFilter:any;
    DeleteProduct:(id:string) => void | any;
    CreateProducts:(productsValue:Products) => void | any;
    setPage:any;
}

export const ProductContext = createContext(
    {} as ProductContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState<[] | any>([]);

    async function getProducts() {
        const res = await getProductsData(page);
        if (!filter.length) {
            setFilter(res.data);
        }
        return res;
    }

    async function CreateProducts(productsValue:Products) {
        try {
            // Precisamos pegar o token
            const {'mk-delivery.token': token} = parseCookies();

            const formData = new FormData();
            formData.append('name', productsValue.name);
            formData.append('details', productsValue.details);
            formData.append('price', productsValue.price.toString());
            formData.append('amount', productsValue.amount.toString());
            formData.append('type', productsValue.type);
            formData.append('image', productsValue.image);

            const res = await api.post('/products', formData, {
                headers: {
                    'Accept': 'application/json',
                    Authorization: `Bearer ${token}`
                }
              });
    
             if(res.status === 201) {
                console.log('deu certo', res.data); 
             }
        } catch (error) {
            console.log('Tivemos um erro ao criar o produto' ,error);
        }
    }

    async function DeleteProduct(id:string) {
        try {
            const {'mk-delivery.token': token} = parseCookies();
            const res = await api.delete(`/products/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            if(res.status === 204) return alert('Produto deletado com sucesso');

            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const {data:products, isLoading} = useQuery({
        queryKey:['products', page],
        queryFn:getProducts
    })

     return (
        <ProductContext.Provider value={{ products, isLoading, filter, setFilter, setPage, CreateProducts, DeleteProduct }}>
            {children}
        </ProductContext.Provider>
     )
}

export function useProducts() {
    const context = useContext(ProductContext);

    return context;
}