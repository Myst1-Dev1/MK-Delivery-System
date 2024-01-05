import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

interface ProductBoxProps {
    image:string;
    name:string;
    description:string;
    amount:string;
    price:number | string | any;
}

export function ProductBox({ image, name, description, amount, price }:ProductBoxProps) {
    return (
        <div className='relative lg:mb-0 sm: mb-10'>
          <Image className='rounded-lg w-[300px] h-[200px] object-cover' src={image} width={300} height={200} alt='imagem do produto' />
          <div className='w-[300px]'>
            <h2 className='font-bold text-xl mt-3'>{name}</h2>
            <h3 className='mt-3'>{description}</h3>
            <h3>{amount}</h3>
            <div className='flex justify-between items-center mt-5'>
              <h4 className='text-2xl font-bold'>{price}</h4>
              <button className='flex items-center gap-3 text-xs p-2 h-14 bg-red-500 text-white rounded-lg hover:bg-red-800 transition-colors'>
                <FaShoppingCart className="text-xl" />
                Adicionar ao carrinho
              </button>
            </div>
          </div>
          <div className='absolute top-2 right-2 flex justify-center align-center bg-white w-10 h-10 rounded-full cursor-pointer hover:bg-red-600 transition-color'>
            <FaHeart className="m-auto text-gray-400 hover:text-white transition-colors" />
          </div>
        </div>
    )
}