import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { FaTimes, FaUpload } from "react-icons/fa";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../app/services/queryClient";
import { Products } from "../../../app/types/Products";
import { parseCookies } from "nookies";
import { api } from "../../../app/services/axios";

interface CreateProductModalProps {
    productId:any;
    isOpen:boolean;
    onRequestClose:any;
}

export function UpdateProductModal({productId, isOpen , onRequestClose}:CreateProductModalProps) {

    console.log(productId);

    const { register, handleSubmit, formState:{errors}, setValue, reset } = useForm();

    const [image, setImage] = useState<null | any>(null);

    async function UpdateProducts(productsValue:Products | any) {
        try {
            // Precisamos pegar o token
            const {'mk-delivery.token': token} = parseCookies();

            console.log('A imagem está aqui', productsValue.image.name);

            const formData = new FormData();
            formData.append('name', productsValue.name);
            formData.append('details', productsValue.details);
            formData.append('price', productsValue.price.toString());
            formData.append('amount', productsValue.amount.toString());
            formData.append('type', productsValue.type);
            formData.append('_method', 'PUT');

            if(productsValue.image.name) formData.append('image', productsValue.image);

            const res = await api.post(`products/${productId}`, formData, {
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
              });
    
              if(res.status === 200) {
                console.log('Dados de produto atualizados com sucesso', res.data);
            } else {
                console.log('Tivemos um erro AO ATUALIZAR O PRODUTO', res.data);
            }
        } catch (error) {
            console.log('Tivemos um erro ao atualizar o produto' ,error);
        }
    }

    const mutation:any = useMutation({
        mutationFn:UpdateProducts,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({queryKey: ['products']})
        }
    });

    function handleUpdateProduct(data:any) {
        try {
            mutation.mutate(data);
            reset();
            setImage(null);
        } catch (error) {
            console.log('Tivemos um erro ao atualizar o produto', error);
        }
    }

    return (
        <>
        {isOpen &&
            <Modal>
                <h2 className="text-xl font-bold text-center">Atualizar Produto</h2>
                <FaTimes className="absolute top-6 right-4 cursor-pointer hover:text-red-500 transition-colors" onClick={() => onRequestClose(false)} />
                <form onSubmit={handleSubmit(handleUpdateProduct)} encType="multipart/form-data" className="grid gap-5 grid-cols-1 place-items-center mt-5">
                    <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                        <div className="flex flex-col gap-5">
                            <img className="border border-gray-300 object-cover rounded-full h-12 w-12" width={50} height={50} src={image !== null ? image : '/images/userUploadImage.webp'} alt="imagem de upload" />
                            <input 
                                {...register('image')} 
                                type="file" 
                                id='image'
                                className="hidden"
                                onChange={(e) => {
                                    const file:any = e.target.files?.[0];
                                    setValue('image', file);
                                    setImage(URL.createObjectURL(file));
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
                                className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-12 sm: h-[50px]"
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
                                className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-12 sm: h-[50px]"
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
                                className="inputNumber outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-12 sm: h-[50px]"
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
                                className="inputNumber outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-12 sm: h-[50px]"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="type">Tipo</label>
                            <select className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-12 sm: h-[50px]" id="type" {...register('type')} >
                                <option value="Frango">Frango</option>
                                <option value="Carne">Carne</option>
                                <option value="Macarrão">Macarrão</option>
                                <option value="Salada">Salada</option>
                                <option value="Sobremesa">Sobremesa</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="p-3 w-full rounded-lg text-xl bg-red-500 text-white hover:bg-red-600 transition-colors lg:h-12 sm: h-[50px]">Atualizar</button>
                </form>
            </Modal>
        }
        </>
    )
}