import { queryClient } from "../../../app/services/queryClient";
import { getProductById } from "../../../app/services/axios";
import { formatPrice } from "../../../app/utils/formatPrice";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react"
import { FaTimes } from "react-icons/fa"

interface ProductModalProps {
    onSetIsProductModalOpen:Dispatch<SetStateAction<boolean>>
    id:string;
}

export function ProductModal({ onSetIsProductModalOpen, id } :ProductModalProps) {

    async function getProductDetails() {
        const res = await getProductById(id);
        return res;
    }

    function closeProductModal():any {
        onSetIsProductModalOpen(false);
    }

    const { data:product, isFetching } = useQuery({
        queryKey:['productById'],
        queryFn:getProductDetails
    });

    const openProductModalMutation:any = useMutation({
        mutationFn:closeProductModal,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({queryKey: ['productById']})
        }
      })

      function handleCloseProductModal() {
        openProductModalMutation.mutate();
      }

    return (
        <div className="bg-overlay h-screen w-full fixed top-0 left-0 right-0 z-20">
            <div className="bg-white rounded-lg absolute top-[50%] left-[50%] modalTransform lg:w-[400px] md:w-[400px] sm: w-[380px]">
                {isFetching ? <div className="mt-3 mb-3 m-auto animate-spin rounded-full h-20 w-20 border-8 border-red-500 border-t-4 border-t-red-300"></div>  : 
                <div key={product.id} className="relative">
                    <div onClick={() => handleCloseProductModal()} className="absolute cursor-pointer right-2 top-2 bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-red-600 hover:text-white transition-colors">
                        <FaTimes />
                    </div>
                    <div>
                        <img className="w-full h-40 object-cover" src={`https://api.digitallabor.com.br/${product.image}`} alt="imagem do produto" />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-5">{product.name}</h2>
                        <p className="text-xs mb-2">{product.details}</p>
                        <h3 className="text-xs">
                            {product.amount !== 1 ? `Porção com ${product.amount} unidades`
                            : `${product.amount} Porção`}
                        </h3>
                        <div className="mt-10 flex flex-col gap-3">
                            <label htmlFor="observation" className="font-bold">Alguma observação?</label>
                            <textarea placeholder="remover cebola, carne ao ponto, etc." className="outline-none resize-none overflow-hidden border border-gray-400 rounded-lg p-3 w-full h-24" id="observation" />
                        </div>
                        <div className="flex justify-between items-center mt-10">
                            <div className="flex">
                                <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 hover:text-white hover:border-none transition-colors">-</div>
                                <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 hover:text-white hover:border-none transition-colors">01</div>
                                <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 hover:text-white hover:border-none transition-colors">+</div>
                            </div>
                            <button className='flex justify-between items-center text-xs p-2 h-11 w-44 bg-red-500 text-white rounded-lg hover:bg-red-800 transition-colors'>
                                Adicionar <span>{formatPrice(product.price)}</span>
                            </button>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}