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
    const { register, handleSubmit, setValue, reset } = useForm();

    const [image, setImage] = useState<null | any>(null);

    async function updateUserData(data:any) {
        try {
            const {'mk-delivery.token': token} = parseCookies();
            const formData = new FormData();

            formData.append('avatar', data.avatar);
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('current_password', data.current_password);
            formData.append('password_confirmation', data.password_confirmation);
            formData.append('tel', data.tel);

            const res = await api.put(`users/${userId}`, formData, {
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                },
            });

            console.log('Dados de usuário atualizados com sucesso', res.data);
            reset();
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
                            <input {...register('avatar', {required:false})}
                                onChange={(e) => {
                                    const file:any = e.target.files?.[0];
                                    setValue('avatar', file);
                                    setImage(URL.createObjectURL(file))
                                }} className="hidden" type="file" id="avatar" />
                            <label className="cursor-pointer flex gap-5 items-center" htmlFor="avatar"><FaUpload /> <span>Enviar imagem</span></label>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="name">Nome</label>
                            <input {...register('name', {required:false})}  className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="text" placeholder="John Doe" id="name" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="email">Email</label>
                            <input {...register('email', {required:false})} className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="text" placeholder="johndoe@gmail.com" id="email" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="tel">Telefone</label>
                            <input {...register('tel', {required:false})} className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="tel" placeholder="40028922" id="tel" />   
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <label htmlFor="current_password">Senha Atual</label>
                        <input {...register('current_password', {required:false})} className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="password" placeholder="******" id="password" />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="password">Nova Senha</label>
                            <input {...register('password', {required:false})} className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="password" placeholder="******" id="password" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="password_confirmation">Confirme a Senha</label>
                            <input {...register('password_confirmation', {required:false})} className="outline-none border border-gray-400 rounded-lg p-3 w-full lg:h-14 sm: h-[50px]" type="password" placeholder="Confirme senha" id="password_confirmation" />
                        </div>
                    </div>
                    <div></div>
                    <button type="submit" className="p-3 w-full rounded-lg text-xl bg-red-500 text-white hover:bg-red-600 transition-colors lg:h-14 sm: h-[50px]">Atualizar dados</button>
                </form>
            </Modal>
            }
        </>        
    )
}