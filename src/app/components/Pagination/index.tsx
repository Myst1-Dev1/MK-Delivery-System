import { ProductContext } from "../../../app/services/hooks/useProducts/useProducts"
import { useContext } from "react"

export function Pagination() {
    const { products } = useContext(ProductContext);

    console.log(products);

    const currentPage = products?.current_page;
    const lastPage = products?.last_page;
    const itensPerPage = products?.per_page;

    console.log(currentPage)
    console.log(lastPage);
    console.log(itensPerPage);

    return (
        <div className='flex justify-end items-end gap-5 py-10 mb-20'>
            <button className='p-3 rounded-lg w-10 h-10 border border-gray-700 flex justify-center items-center hover:text-white hover:bg-red-500 hover:border-transparent transition-colors'>1</button>
            <button className='p-3 rounded-lg w-10 h-10 border border-gray-700 flex justify-center items-center hover:text-white hover:bg-red-500 hover:border-transparent transition-colors'>2</button>
            <button className='p-3 rounded-lg w-10 h-10 border border-gray-700 flex justify-center items-center hover:text-white hover:bg-red-500 hover:border-transparent transition-colors'>3</button>
        </div>
    )
}