'use client'

import { FaSearch } from 'react-icons/fa'
import { ProductBox } from './components/productBox'

export default function Home() {
  return (
    <div className='mt-16 container px-3 m-auto'>
      <div className='bg-banner bg-no-repeat min-h-72 w-full lg:bg-cover'></div>
      <div className='flex gap-8 mt-10 sm: flex-wrap'>
        <div className='flex gap-5 items-center bg-white border border-gray-400 rounded-lg p-2 h-14 lg:w-60 sm: w-full'>
          <FaSearch className="text-gray-400" />
          <input className='outline-none lg:w-40 sm: w-full' type="text" placeholder='Pesquisar...' />
        </div>
        <select className='text-gray-400 outline-none border border-gray-400 rounded-lg p-2 h-14 lg:w-60 sm: w-full'>
          <option value="Sushi">Sushi</option>
          <option value="Macarrão">Macarrão</option>
          <option value="Salada">Salada</option>
          <option value="Sobremesa">Sobremesa</option>
        </select>
      </div>

      <div className='mt-16 grid gap-10 place-items-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1'>
        <ProductBox 
          image = '/images/sushi.webp'
          name = 'Hot roll'
          description = 'Composto por: lorem ipsum'
          amount = 'Porção com 8 unidades'
          price = 'R$:17,90'
        />
         <ProductBox 
          image = '/images/sushi.webp'
          name = 'Hot roll'
          description = 'Composto por: lorem ipsum'
          amount = 'Porção com 8 unidades'
          price = 'R$:17,90'
        />
         <ProductBox 
          image = '/images/sushi.webp'
          name = 'Hot roll'
          description = 'Composto por: lorem ipsum'
          amount = 'Porção com 8 unidades'
          price = 'R$:17,90'
        />
         <ProductBox 
          image = '/images/sushi.webp'
          name = 'Hot roll'
          description = 'Composto por: lorem ipsum'
          amount = 'Porção com 8 unidades'
          price = 'R$:17,90'
        />
       
      </div>

      <div className='flex justify-end items-end gap-5 py-10 mb-20'>
        <button className='p-3 rounded-lg w-10 h-10 border border-gray-700 flex justify-center items-center hover:text-white hover:bg-red-500 hover:border-transparent transition-colors'>1</button>
        <button className='p-3 rounded-lg w-10 h-10 border border-gray-700 flex justify-center items-center hover:text-white hover:bg-red-500 hover:border-transparent transition-colors'>2</button>
        <button className='p-3 rounded-lg w-10 h-10 border border-gray-700 flex justify-center items-center hover:text-white hover:bg-red-500 hover:border-transparent transition-colors'>3</button>
      </div>
    </div>
  )
}
