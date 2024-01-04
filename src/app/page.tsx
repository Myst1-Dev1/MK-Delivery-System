import Image from 'next/image'
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='mt-16 container px-3 m-auto'>
      <div className='bg-banner bg-no-repeat min-h-72 w-full lg:bg-cover'></div>
      <div className='flex gap-8 mt-10 sm: flex-wrap'>
        <div className='flex gap-2 items-center border border-gray-400 rounded-lg p-2 h-14 lg:w-60 sm: w-full'>
          <FaSearch className="text-gray-400" />
          <input className='outline-none bg-none' type="text" placeholder='Pesquisar...' />
        </div>
        <select className='text-gray-400 outline-none border border-gray-400 rounded-lg p-2 h-14 lg:w-60 sm: w-full'>
          <option value="Sushi">Sushi</option>
          <option value="Macarrão">Macarrão</option>
          <option value="Salada">Salada</option>
          <option value="Sobremesa">Sobremesa</option>
        </select>
      </div>

      <div className='mt-16 mb-16 grid gap-10 place-items-center lg:grid-cols-4 sm:grid-cols-1'>
        <div className='relative'>
          <Image src="/images/productImage.webp" width={280} height={200} alt='imagem do produto' />
          <div className='w-[280px]'>
            <h2 className='font-bold text-xl mt-3'>Takoyaki</h2>
            <h3 className='text-gray mt-3'>Composto por: polvo, cebolinha, gengibre, alga, molho de soja.</h3>
            <h3 className='text-gray'>Porção com 8 unidades</h3>
            <div className='flex justify-between items-center mt-5'>
              <h4 className='text-2xl font-bold'>R$:17,90</h4>
              <button className='flex items-center gap-1 text-xs p-2 h-14 bg-red-500 text-white rounded-lg hover:bg-red-800 transition-colors'>
                <FaShoppingCart className="text-xl" />
                Adicionar ao carrinho
              </button>
            </div>
          </div>
          <div className='absolute top-2 right-2 flex justify-center align-center bg-white w-10 h-10 rounded-full cursor-pointer hover:bg-red-600 transition-color'>
            <FaHeart className="m-auto text-gray-400" />
          </div>
        </div>
        <div className='relative'>
          <Image src="/images/productImage.webp" width={280} height={200} alt='imagem do produto' />
          <div className='w-[280px]'>
            <h2 className='font-bold text-xl mt-3'>Takoyaki</h2>
            <h3 className='text-gray mt-3'>Composto por: polvo, cebolinha, gengibre, alga, molho de soja.</h3>
            <h3 className='text-gray'>Porção com 8 unidades</h3>
            <div className='flex justify-between items-center mt-5'>
              <h4 className='text-2xl font-bold'>R$:17,90</h4>
              <button className='flex items-center gap-1 text-xs p-2 h-14 bg-red-500 text-white rounded-lg hover:bg-red-800 transition-colors'>
                <FaShoppingCart className="text-xl" />
                Adicionar ao carrinho
              </button>
            </div>
          </div>
          <div className='absolute top-2 right-2 flex justify-center align-center bg-white w-10 h-10 rounded-full cursor-pointer hover:bg-red-600 transition-color'>
            <FaHeart className="m-auto text-gray-400" />
          </div>
        </div>
        <div className='relative'>
          <Image src="/images/productImage.webp" width={280} height={200} alt='imagem do produto' />
          <div className='w-[280px]'>
            <h2 className='font-bold text-xl mt-3'>Takoyaki</h2>
            <h3 className='text-gray mt-3'>Composto por: polvo, cebolinha, gengibre, alga, molho de soja.</h3>
            <h3 className='text-gray'>Porção com 8 unidades</h3>
            <div className='flex justify-between items-center mt-5'>
              <h4 className='text-2xl font-bold'>R$:17,90</h4>
              <button className='flex items-center gap-1 text-xs p-2 h-14 bg-red-500 text-white rounded-lg hover:bg-red-800 transition-colors'>
                <FaShoppingCart className="text-xl" />
                Adicionar ao carrinho
              </button>
            </div>
          </div>
          <div className='absolute top-2 right-2 flex justify-center align-center bg-white w-10 h-10 rounded-full cursor-pointer hover:bg-red-600 transition-color'>
            <FaHeart className="m-auto text-gray-400" />
          </div>
        </div>
        <div className='relative'>
          <Image src="/images/productImage.webp" width={280} height={200} alt='imagem do produto' />
          <div className='w-[280px]'>
            <h2 className='font-bold text-xl mt-3'>Takoyaki</h2>
            <h3 className='text-gray mt-3'>Composto por: polvo, cebolinha, gengibre, alga, molho de soja.</h3>
            <h3 className='text-gray'>Porção com 8 unidades</h3>
            <div className='flex justify-between items-center mt-5'>
              <h4 className='text-2xl font-bold'>R$:17,90</h4>
              <button className='flex items-center gap-1 text-xs p-2 h-14 bg-red-500 text-white rounded-lg hover:bg-red-800 transition-colors'>
                <FaShoppingCart className="text-xl" />
                Adicionar ao carrinho
              </button>
            </div>
          </div>
          <div className='absolute top-2 right-2 flex justify-center align-center bg-white w-10 h-10 rounded-full cursor-pointer hover:bg-red-600 transition-color'>
            <FaHeart className="m-auto text-gray-400" />
          </div>
        </div>
      </div>

      <div className='flex justify-end items-end gap-5 py-10 mb-10'>
        <button className='p-3 rounded-lg w-10 h-10 border border-black hover:bg-red-600 transition-color'>1</button>
        <button className='p-3 rounded-lg w-10 h-10 border border-black hover:bg-red-600 transition-color'>2</button>
        <button className='p-3 rounded-lg w-10 h-10 border border-black hover:bg-red-600 transition-color'>3</button>
      </div>
    </div>
  )
}
