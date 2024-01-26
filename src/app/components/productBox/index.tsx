'use client';

import { UserContext } from "../../services/hooks/useUser/useUser";
import { useContext, useState } from "react";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { ProductContext } from "../../services/hooks/useProducts/useProducts";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/axios";
import { parseCookies } from "nookies";
import { ProductModal } from "../ProductModal";
import { AuthContext } from "../../../app/services/hooks/auth/auth";

interface ProductBoxProps {
    id:string;
    image:string;
    name:string;
    description:string;
    amount:string | number | any;
    price:number | string | any;
}

export function ProductBox({ image, name, description, amount, price, id }:ProductBoxProps) {
    const { user } = useContext(UserContext);
    const { isAuthenticated } = useContext(AuthContext);
    const {products , DeleteProduct } = useContext(ProductContext);

    const [isProductModalOpen, setIsProductModalOpen] = useState(false);

    const userId = user?.id;
    const {'mk-delivery.token': token} = parseCookies();

    const favoritesArray = JSON.parse(user?.favorites || '[]');
    const isIdOnFavorites = favoritesArray?.map((favorite:any) => favorite.id)

    const data = products?.data;

    async function handleCreateFavorites(id:string) {
      try {
        const isProductInFavorites = isIdOnFavorites.includes(id);

        if(!isAuthenticated) return alert('Você precisa estar logado para isso')

        if (isProductInFavorites)return alert('Este produto já está favoritado');

        const newProduct = data?.find((product:any) => product.id === id);

        const updatedFavorites = newProduct
          ? [...favoritesArray, newProduct]
          : data;

        await api.put(`users/${userId}`, {
            favorites: JSON.stringify(updatedFavorites),
        }, {
          headers: {
              'Accept': 'application/json',
              Authorization: `Bearer ${token}`
          }
        });

        console.log('Favoritos atualizados:', updatedFavorites);
    } catch (error) {
        console.error('Erro ao atualizar favoritos:', error);
    }
  }

    const createFavoriteMutation:any = useMutation({
      mutationFn:handleCreateFavorites,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({queryKey: ['user']})
        }
  });
  
    const deleteProductMutation:any = useMutation({
      mutationFn:DeleteProduct,
      onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries({queryKey: ['products']})
      }
  });

    function handleDeleteProduct(id:string) {
      deleteProductMutation.mutate(id);
    }

    function handleAddProductToFavorites(id:string) {
      createFavoriteMutation.mutate(id);
    }


    return (
      <>
        <div className='cursor-pointer relative lg:mb-0 sm: mb-10'>
          
            {user?.user_adm === 1 ? 
              <div className="top-[-20px] absolute"><FaTrashAlt onClick={() => handleDeleteProduct(id)} className="text-red-500 cursor-pointer" /></div>
            : ''}
          <div onClick={() => setIsProductModalOpen(true)}>
            <img className='rounded-lg h-[200px] object-cover lg:w-[300px] sm: w-[350px]' src={image} width={300} height={200} alt='imagem do produto' />
            <div className='lg:w-[300px] sm: w-[350px]'>
              <h2 className='font-bold text-xl mt-3'>{name}</h2>
              <h3 className='mt-3 max-w-[25ch] overflow-hidden text-ellipsis whitespace-nowrap'>{description}</h3>
              <h3>{amount !== 1 ? `Porção com ${amount} unidades`
                  : `${amount} Porção`}
              </h3>
              <h4 className='mt-3 text-2xl font-bold'>{price}</h4>
            </div>
          </div>
          <div
              onClick={() => handleAddProductToFavorites(id)}
              className={`${
                  isIdOnFavorites.includes(id)
                      ? 'absolute top-2 right-2 flex justify-center align-center w-10 h-10 rounded-full cursor-pointer bg-red-600 text-white'
                      : 'absolute top-2 right-2 flex justify-center align-center text-gray-400 bg-white w-10 h-10 rounded-full cursor-pointer hover:bg-red-600 hover:text-white transition-color'
              }`}
          >
              <FaHeart className="m-auto transition-colors" />
          </div>
        </div>
        {isProductModalOpen && <ProductModal onSetIsProductModalOpen = {setIsProductModalOpen} id = {id} />}
      </>
    )
}