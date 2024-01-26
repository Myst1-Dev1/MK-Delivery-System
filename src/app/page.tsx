'use client'

import { FaSearch } from 'react-icons/fa'
import { ProductBox } from './components/ProductBox'
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from './services/hooks/useProducts/useProducts'
import { formatPrice } from './utils/formatPrice'
import { CreateProductModal } from './components/CreateProductModal'
import { Pagination } from './components/Pagination'
import { UserContext } from './services/hooks/useUser/useUser'

export default function Home() {
  const { products, isLoading, filter, setFilter } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('Todos');

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenProductModal() {
    setIsModalOpen(true);
  }

  function handleCloseProductModal() {
    setIsModalOpen(false);
  }

  function searchProducts() {
    if(search !== '') {
        setFilter(products?.data.filter((e:any) => e.name.toLowerCase().includes(search.toLowerCase())));
    } else {
        setFilter(products?.data);
    };
};

  function filterProductsByType() {
    if(selectedType !== '') {
      if(selectedType === 'Todos') {
        setFilter(products?.data);
      } else {
        setFilter(products?.data.filter((e:any) => e.type === selectedType))
      }
    }
    else {
      setFilter(products?.data);
    }
  }

  useEffect(() => {
    searchProducts();
  }, [search]);

  useEffect(() => {
    filterProductsByType();
  }, [selectedType]);

  return (
    <div className='mt-8 container px-3 m-auto'>
      <div className='bg-banner bg-no-repeat rounded-lg w-full xL:bg-contain lg:min-h-96 bg-contain md:bg-contain sm:bg-cover min-h-28'></div>

      <div className='py-10'>
        <h2 className='font-bold text-center text-3xl'>Nosso Menu</h2>
      </div>

      <div className='mt-5 flex justify-between items-center m-auto sm: flex-wrap gap-5'>
        <div className='flex gap-8 lg:max-w-[600px] md: w-full sm: flex-wrap'>
          <div className='flex gap-5 items-center bg-white border border-gray-400 rounded-lg p-3 h-14 lg:w-[250px] sm: w-full'>
            <FaSearch className="text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)}  className='outline-none lg:w-40 sm: w-full' type="text" placeholder='Pesquisar...' />
          </div>
          <select onChange={e => setSelectedType(e.target.value)} value={selectedType} className='text-gray-400 outline-none border border-gray-400 rounded-lg p-3 h-14 lg:w-[250px] sm: w-full'>
            <option value="Todos">Todos</option>
            <option value="Frango">Frango</option>
            <option value="Carne">Carne</option>
            <option value="Macarrão">Macarrão</option>
            <option value="Salada">Salada</option>
            <option value="Sobremesa">Sobremesa</option>
          </select>
        </div>

        {user?.user_adm === 1 ? 
          <button onClick={handleOpenProductModal} className="rounded-lg bg-red-500 text-white p-3 h-14 hover:bg-red-600 transition-colors lg:w-[250px] sm: w-full">Criar novo Produto</button> 
        : ''}
     
      </div>
      
      <div className='mt-16 grid gap-10 place-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {isLoading ? <div className="m-auto animate-spin rounded-full h-20 w-20 border-8 border-red-500 border-t-4 border-t-red-300"></div> 
          : products && products.data && products.data.length > 0 ? 
            search === '' && selectedType === 'Todos' ? products.data?.map((product:any) => (
            <div key={product.id}>
              <ProductBox
                id={product.id}
                image = {`https://api.digitallabor.com.br/${product.image}`}
                name = {product.name}
                description = {product.details}
                amount = {product.amount}
                price = {formatPrice(product.price)} 
              />
            </div>
          )) : filter.map((product:any) => (
            <div key={product.id}>  
              <ProductBox
                id={product.id}
                image = {`https://api.digitallabor.com.br/${product.image}`}
                name = {product.name}
                description = {product.details}
                amount = {product.amount}
                price = {formatPrice(product.price)}
              />
            </div>
          )) : 'sem produtos' }
        <CreateProductModal isOpen={isModalOpen} onRequestClose={handleCloseProductModal} />
         
      </div>
      <Pagination />
    </div>
  )
}
