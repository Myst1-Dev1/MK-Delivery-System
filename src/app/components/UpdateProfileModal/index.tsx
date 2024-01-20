import { FaTimes, FaUpload } from "react-icons/fa";
import { parseCookies } from "nookies";
import { api } from "../../../app/services/axios";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../app/services/queryClient";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "../Modal";

interface UpdateProfileModalProps {
    isOpen:boolean;
    onRequestClose:any;
    userId:string;
}

export function UpdateProfileModal({ isOpen , onRequestClose, userId}: UpdateProfileModalProps) {
    const { register, handleSubmit, formState:{errors}, setValue, watch  } = useForm();

    const [image, setImage] = useState<null | any>(null);
    const [isError , setIsError] = useState(false)

    const passwordConfirmation = watch('passwordConfirmation', '');

    async function updateUserData(data:any) {
        try {
            const {'mk-delivery.token': token} = parseCookies();
            const formData = new FormData();

            formData.append('firstname', data.firstname);
            formData.append('lastname', data.lastname);
            formData.append('password', data.password);
            formData.append('tel', data.tel);

            if (data.image) {
                formData.append('image', data.image);
            }

            if (data.password !== passwordConfirmation) {
                setIsError(true);
                return;
            }

            const userUpdated = formData;

            await api.put(`user/profile/${userId}`, userUpdated, {
                headers: {
                    'auth-token': token,
                },
            });
        } catch (error) {
            console.error('Erro ao atualizar dados do usuário:', error);
        }
    }

   const mutation = useMutation({
    mutationFn:updateUserData,
    onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({queryKey: ['user']})
        }
    });

    function handleUpdateUserData(data:any) {
        mutation.mutate(data);
    }

    return (
        <>
        {isOpen &&
            <Modal>
                <h2 className="text-xl font-bold text-center">Atualizar dados de usuário</h2>
                <FaTimes className="absolute top-6 right-4 cursor-pointer hover:text-red-500 transition-colors" onClick={onRequestClose} />
                <form onSubmit={handleSubmit(handleUpdateUserData)} className="grid gap-8 grid-cols-1 place-items-center mt-5">
                    <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                        <div className="flex flex-col gap-5">
                            <Image className="border border-gray-300 object-cover rounded-full h-20 lg:w-20 sm: w-16" width={50} height={50} src={image !== null ? image : '/images/userUploadImage.webp'} alt="imagem de upload" />
                            <input {...register('image', {required:false})}
                                onChange={(e) => {
                                    const file:any = e.target.files?.[0];
                                    setValue('image', file);
                                    setImage(URL.createObjectURL(file))
                                }} className="hidden" type="file" id="image" />
                            <label className="cursor-pointer flex gap-5 items-center" htmlFor="image"><FaUpload /> <span>Enviar imagem</span></label>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="firstname">Primeiro Nome</label>
                            <input {...register('firstname', {required:false})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="text" placeholder="John" id="firstname" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="lastname">Último Nome</label>
                            <input {...register('lastname', {required:false})} className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="text" placeholder="Último nome" id="lastname" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="tel">Telefone</label>
                            <input {...register('tel', {required:false})} className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="tel" placeholder="40028922" id="tel" />   
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="password">Senha</label>
                            <input {...register('password', {required:false})}   className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="password" placeholder="******" id="password" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="passwordConfirmation">Confirme a Senha</label>
                            <input className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="password" placeholder="Confirme senha" id="passwordConfirmation" />
                        </div>
                        {isError ? <span className="text-red-600 font-bold">As senhas não coincidem</span> : ''}
                    </div>
                    <button type="submit" className="p-3 w-full rounded-lg text-xl bg-red-500 text-white hover:bg-red-600 transition-colors lg:h-14 sm: h-[50px]">Atualizar dados</button>
                </form>
            </Modal>
            }
        </>        
    )
}