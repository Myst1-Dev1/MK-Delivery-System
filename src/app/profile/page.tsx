'use client'

import Image from "next/image";

import { useState, useContext } from "react";
import { FaHeart, FaPencilAlt, FaRocketchat, FaSearch, FaUser } from "react-icons/fa";
import { ProductBox } from "../components/productBox";
import { UserContext } from "../services/hooks/useUser/useUser";
import { UpdateProfileModal } from "../components/UpdateProfileModal";

export default function Profile() {
    const { data } = useContext(UserContext);

    const [profile, setProfile] = useState(true);
    const [favorites, setFavorites] = useState(false);
    const [conversations, setConversations] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isNewProfileModalOpen, setIsNewProfileModalOpen] = useState(false);

    function openProfileNavItem(navItem:string) {
        if (isLoading) {
            return;
        }
        setIsLoading(true);

        setTimeout(() => {
            setProfile(false);
            setFavorites(false);
            setConversations(false);

            switch (navItem) {
                case 'profile':
                    setProfile(true);
                    break;
                case 'favorites':
                    setFavorites(true);
                    break;
                case 'conversations':
                    setConversations(true);
                    break;
                default:
                    break;
            }
            setIsLoading(false);
        }, 1000);
    }

    function handleOpenProfileModal() {
        setIsNewProfileModalOpen(true);
    }

    function handleCloseProfileModal() {
        setIsNewProfileModalOpen(false);
    }

    return (
        <>
            <div className="container m-auto py-10 mb-10">
                {data?.map(user => (
                    <div key={user.data._id} className="mt-10 container m-auto flex flex-wrap gap-10 lg:justify-start sm: justify-center">
                        <div className="border border-gray-300 h-[280px] rounded-lg divide-y divide-gray-300 lg:w-60 sm: w-[350px]">
                            <div className="flex items-center gap-3 p-3">
                                <Image className="rounded-full bg-contain w-[50px] h-[50px]" src={user.data.image} width={50} height={50} alt="foto do usuário" />
                                <h2 className="font-bold lg:block text-2xl">{user.data.firstname}</h2>
                            </div>
                            <div className="mt-5 p-3 flex flex-col m-auto gap-5 lg:items-start justify-center">
                                <div onClick={() => openProfileNavItem('profile')} className="flex items-center gap-3">
                                    <FaUser className={`cursor-pointer text-xl ${profile ? 'text-red-500' : 'text-black'} `} />
                                    <h3 className="cursor-pointer font-bold lg:block text-xl hover:text-red-500 transition-colors">Perfil</h3>
                                </div>
                                <div onClick={() => openProfileNavItem('favorites')} className="flex items-center gap-3">
                                    <FaHeart className={`cursor-pointer text-xl ${favorites ? 'text-red-500' : 'text-black'} `} />
                                    <h3 className="cursor-pointer font-bold lg:block text-xl hover:text-red-500 transition-colors">Favoritos</h3>
                                </div>
                                <div onClick={() => openProfileNavItem('conversations')} className="flex items-center gap-3">
                                    <FaRocketchat className={`cursor-pointer text-xl ${conversations ? 'text-red-500' : 'text-black'} `} />
                                    <h3 className="cursor-pointer font-bold lg:block text-xl hover:text-red-500 transition-colors">Conversas</h3>
                                </div>
                            </div>
                        </div>
                            
                        {isLoading ? <div className="m-auto animate-spin rounded-full h-20 w-20 border-8 border-red-500 border-t-4 border-t-red-300"></div> :
                        <div>
                            {profile && <div>
                                <h2 className="font-bold lg:text-3xl sm: text-xl">Informações do usuário</h2>
                                <div className="mt-5 flex flex-col gap-3">
                                    <h6 className="lg:text-sm sm: text-xs">Nome: {user.data.firstname} {user.data.lastname}</h6>
                                    <h6 className="lg:text-sm sm: text-xs">Endereço: Rua Lorem Ipsum</h6>
                                    <h6 className="lg:text-sm sm: text-xs">Telefone: {user.data.tel}</h6>
                                    <button onClick={handleOpenProfileModal} className="mt-5 flex gap-3 justify-center items-center rounded-lg bg-red-500 p-3 w-40 h-14 text-white hover:bg-red-600 transition-colors">
                                        <FaPencilAlt />
                                        Editar Perfil
                                    </button>
                                </div>
                            </div>}

                            {favorites &&<div>
                                <div className='flex gap-2 items-center border border-gray-400 rounded-lg p-2 h-14 lg:w-60 sm: w-full'>
                                    <FaSearch className="text-gray-400" />
                                    <input className='outline-none bg-none w-40' type="text" placeholder='Pesquisar...' />
                                </div>
                                <div className="mt-10 grid gap-10 lg:grid-cols-2 sm: grid-cols-1">
                                <ProductBox 
                                    image = '/images/sushi.webp'
                                    name = 'Takoyaki'
                                    description = 'Composto por: polvo, cebolinha, gengibre, alga, molho de soja.'
                                    amount = 'Porção com 8 unidades'
                                    price = 'R$:17,90'
                                />
                                <ProductBox 
                                    image = '/images/sushi.webp'
                                    name = 'Takoyaki'
                                    description = 'Composto por: polvo, cebolinha, gengibre, alga, molho de soja.'
                                    amount = 'Porção com 8 unidades'
                                    price = 'R$:17,90'
                                />
                                </div>
                            </div>}

                            {conversations &&
                            <div className="flex flex-col gap-5 border border-gray-300 rounded-lg divide-y divide-gray-300 lg:w-[450px] sm: w-[350px]">
                                <div className="flex gap-3 items-center p-3">
                                    <Image src="/images/userImage.webp" width={40} height={40} alt="imagem do adm que enviou a mensagem"/>
                                    <p className="text-xs">
                                        Senhor tivemos um problema com seu pedido, devido ao endereço estar errado, 
                                        o entregador se perdeu.
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center p-3">
                                    <Image src="/images/userImage.webp" width={40} height={40} alt="imagem do adm que enviou a mensagem"/>
                                    <p className="text-xs">
                                        Senhor tivemos um problema com seu pedido, devido ao endereço estar errado, 
                                        o entregador se perdeu.
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center p-3">
                                    <Image src="/images/userImage.webp" width={40} height={40} alt="imagem do adm que enviou a mensagem"/>
                                    <p className="text-xs">
                                        Senhor tivemos um problema com seu pedido, devido ao endereço estar errado, 
                                        o entregador se perdeu.
                                    </p>
                                </div>
                            </div>}
                            <UpdateProfileModal userId={user.data._id} isOpen={isNewProfileModalOpen} onRequestClose={handleCloseProfileModal} />   
                        </div>
                        }
                    </div>
                ))}
            </div>
        </>
    )
}