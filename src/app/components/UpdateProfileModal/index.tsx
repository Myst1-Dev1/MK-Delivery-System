import { FaTimes, FaUpload } from "react-icons/fa";
import { parseCookies } from "nookies";
import { api } from "../../../app/services/axios";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../app/services/queryClient";
import { useForm } from "react-hook-form";

interface UpdateProfileModalProps {
    isOpen:boolean;
    onRequestClose:any;
    userId:string;
}

export function UpdateProfileModal({ isOpen , onRequestClose, userId}: UpdateProfileModalProps) {
    const { register, handleSubmit, formState:{errors}, setValue } = useForm();

//    async function updateUserData(formData: FormData) {
//     try {
//         const {'mk-delivery.token': token} = parseCookies();

//         const userUpdated = {
//             firstname: formData.get('firstname'),
//             lastname: formData.get('lastname'),
//             password: formData.get('password'),
//             tel: formData.get('tel'),
//             image: formData.get('image'),
//         };

//         await api.put(`user/profile/${userId}`, userUpdated, {
//             headers: {
//                 'auth-token': token,
//             },
//         });

//         console.log(userUpdated);

//         console.log('deu certo');

//     } catch (error) {
//         console.error('Erro ao atualizar dados do usuário:', error);
//     }
//    }

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
            <div className="bg-overlay h-screen w-full fixed top-0 left-0 right-0 z-20">
                <div className="bg-white rounded-lg p-6 absolute top-[50%] left-[50%] modalTransform lg:w-[500px] sm: w-80">
                    <h2 className="text-xl font-bold text-center">Atualizar dados de usuário</h2>
                    <FaTimes className="absolute top-4 right-4 cursor-pointer hover:text-red-500 transition-colors" onClick={onRequestClose} />
                    <form onSubmit={handleSubmit(handleUpdateUserData)} className="grid gap-8 grid-cols-1 place-items-center mt-10">
                        <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                            <div>
                                <input {...register('image', {required:false})}
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        setValue('image', file);
                                    }} className="hidden" type="file" id="image" />
                                <label className="cursor-pointer flex gap-5 items-center" htmlFor="image"><FaUpload /> <span>Enviar imagem</span></label>
                            </div>
                            <input {...register('firstname', {required:false})}   className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="text" placeholder="Primeiro nome" />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                            <input {...register('lastname', {required:false})} className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="text" placeholder="Último nome" />
                            <input {...register('tel', {required:false})} className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="tel" placeholder="Telefone" />   
                        </div>
                        <div className="grid lg:grid-cols-2 gap-5 sm: grid-cols-1 w-full">
                            <input {...register('password', {required:false})}   className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="Senha" />
                            {/* <input className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="password" placeholder="Confirme senha" /> */}
                        </div>
                        <button type="submit" className="p-3 w-full rounded-lg text-xl h-14 bg-red-500 text-white hover:bg-red-600 transition-colors">Atualizar dados</button>
                    </form>
                </div>
            </div>
            }
        </>        
    )
}