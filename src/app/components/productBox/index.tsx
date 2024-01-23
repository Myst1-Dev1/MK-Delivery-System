'use client';

import { UserContext } from "../../../app/services/hooks/useUser/useUser";
import Image from "next/image";
import { useContext } from "react";
import { FaHeart, FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { ProductContext } from "../../../app/services/hooks/useProducts/useProducts";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../app/services/queryClient";

interface ProductBoxProps {
    id:string;
    image:string;
    name:string;
    description:string;
    amount:string | number | any;
    price:number | string | any;
}

export function ProductBox({ image, name, description, amount, price, id }:ProductBoxProps) {
    const { data } = useContext(UserContext);
    const { DeleteProduct } = useContext(ProductContext);

    const mutation:any = useMutation({
      mutationFn:DeleteProduct,
      onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries({queryKey: ['products']})
          }
      });

    function handleDeleteProduct(id:string) {
      mutation.mutate(id);
    }

    return (
        <div className='relative lg:mb-0 sm: mb-10'>
          
            {data?.user_adm === 1 ? 
              <div className="top-6 left-4 absolute"><FaTrashAlt onClick={() => handleDeleteProduct(id)} className="text-red-500 cursor-pointer" /></div>
            : ''}

          <img className='rounded-lg h-[200px] object-cover lg:w-[300px] sm: w-[350px]' src={image} width={300} height={200} alt='imagem do produto' />
          <div className='lg:w-[300px] sm: w-[350px]'>
            <h2 className='font-bold text-xl mt-3'>{name}</h2>
            <h3 className='mt-3 max-w-[25ch] overflow-hidden text-ellipsis whitespace-nowrap'>{description}</h3>
            <h3>{amount !== 1 ? `Porção com ${amount} unidades`
                : `${amount} Porção`}
            </h3>
            <div className='flex justify-between items-center mt-5'>
              <h4 className='text-2xl font-bold'>{price}</h4>
              <button className='flex items-center gap-3 text-xs p-2 h-14 bg-red-500 text-white rounded-lg hover:bg-red-800 transition-colors'>
                <FaShoppingCart className="text-xl" />
                Adicionar ao carrinho
              </button>
            </div>
          </div>
          <div className='absolute top-2 right-2 flex justify-center align-center text-gray-400 bg-white w-10 h-10 rounded-full cursor-pointer hover:bg-red-600 hover:text-white transition-color'>
            <FaHeart className="m-auto transition-colors" />
          </div>
        </div>
    )
}