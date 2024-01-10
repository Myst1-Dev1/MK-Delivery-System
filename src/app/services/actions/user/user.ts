'use server'

// export async function updateUserData(formData: FormData, userId:any) {
//     try {
//         const {'mk-delivery.token': token} = parseCookies();

//         const userUpdated = {
//             firstname: formData.get('firstname'),
//             lastname: formData.get('lastname'),
//             password: formData.get('password'),
//             tel: formData.get('tel'),
//         };

//         await api.put(`user/profile/${userId}`, userUpdated, {
//             headers: {
//                 'auth-token': token,
//             },
//         });
        
//         //revalidatePath('/profile');

//         console.log('deu certo');

//     } catch (error) {
//         console.error('Erro ao atualizar dados do usuário:', error);
//     }
// }