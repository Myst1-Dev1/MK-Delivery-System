import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { FaTimes, FaUpload } from "react-icons/fa";
import { useContext, useState } from "react";
import Image from "next/image";
import { ProductContext } from "../../../app/services/hooks/useProducts/useProducts";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../app/services/queryClient";

interface CreateProductModalProps {
    isOpen:boolean;
    onRequestClose:any;
}

export function CreateProductModal({ isOpen , onRequestClose}:CreateProductModalProps) {
    const { CreateProducts } = useContext(ProductContext);

    const { register, handleSubmit, formState:{errors}, setValue, reset } = useForm();

    const [image, setImage] = useState<null | any>(null);

    const mutation:any = useMutation({
        mutationFn:CreateProducts,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({queryKey: ['products']})
        }
    });

    function handleCreateNewProduct(data:any) {
        try {
            mutation.mutate(data);
            reset();
            setImage(null);
        } catch (error) {
            console.log('Tivemos um erro', error);
        }
    }

    return (
        <>
        {isOpen &&
            <Modal>
                <h2 className="text-xl font-bold text-center">Criar Produto</h2>
                <FaTimes className="absolute top-6 right-4 cursor-pointer hover:text-red-500 transition-colors" onClick={onRequestClose} />
                <form onSubmit={handleSubmit(handleCreateNewProduct)} encType="multipart/form-data" className="grid gap-8 grid-cols-1 place-items-center mt-5">
                    <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                        <div className="flex flex-col gap-5">
                            <img className="border border-gray-300 object-cover rounded-full h-20 lg:w-20 sm: w-16" width={50} height={50} src={image !== null ? image : '/images/userUploadImage.webp'} alt="imagem de upload" />
                            <input 
                                {...register('image')} 
                                type="file" 
                                id='image'
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    setValue('image', file);
                                    setImage(file);
                                }}
                            />
                            <label className="cursor-pointer flex gap-5 items-center" htmlFor="image"><FaUpload /> <span>Enviar imagem</span></label>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="name">Nome do Produto</label>
                            <input 
                                {...register('name')} 
                                type="text"
                                placeholder='Frango coreano' 
                                id='name'
                                className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]"
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="details">Detalhes</label>
                            <input 
                                {...register('details')} 
                                type="text" 
                                placeholder='frango, molho, cebola, etc' 
                                id='details'
                                className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="price">Preço do Produto</label>
                            <input 
                                {...register('price')} 
                                type="number"
                                step="0.01" 
                                min="0" 
                                max="100"
                                placeholder='15.40' 
                                id='price'
                                className="inputNumber outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]"
                            />  
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="amount">Quantidade</label>
                            <input 
                                {...register('amount')} 
                                type="number" 
                                placeholder='4' 
                                id='amount'
                                className="inputNumber outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="type">Tipo</label>
                            <select className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" id="type" {...register('type')} >
                                <option value="Frango">Frango</option>
                                <option value="Carne">Carne</option>
                                <option value="Macarrão">Macarrão</option>
                                <option value="Salada">Salada</option>
                                <option value="Sobremesa">Sobremesa</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="p-3 w-full rounded-lg text-xl bg-red-500 text-white hover:bg-red-600 transition-colors lg:h-14 sm: h-[50px]">Criar produto</button>
                </form>
            </Modal>
        }
        </>
    )
}