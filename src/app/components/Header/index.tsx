'use client'

import Link from "next/link";

import { useContext, useEffect } from 'react';
import { NavBar } from "../NavBar";
import { Cart } from "../Cart";
import { useState } from "react";
import { AuthContext } from "../../../app/services/hooks/auth/auth";
import { UserContext } from "../../../app/services/hooks/useUser/useUser";
import { FaBell, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";

export function Header() {
    const { isAuthenticated } = useContext(AuthContext);
    const { user, isLoading } = useContext(UserContext);

    const router = useRouter();

    const [cart, setCart] = useState(false);
    const [isClient, setIsClient] = useState(false);

    function handleLogout() {
        destroyCookie(null,'mk-delivery.token');
        router.push('/signInPage');
        router.refresh();
    }

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div className="container m-auto flex mt-3 justify-between items-center sm: px-3">
                <img className="object-cover lg:w-52 sm: w-28" src="/images/logo.webp" alt="imagem da logo" />
                {isAuthenticated && isClient ? 
                    <div>
                        {isLoading ? 'carregando...' :
                        <div key={user?.id} className="flex gap-5 items-center">
                        <FaShoppingCart onClick={() => setCart(true)} className="fill-none stroke-2 stroke-black text-2xl cursor-pointer hover:fill-red-500 hover:stroke-none transition-colors" />
                        <FaBell className="fill-none stroke-2 stroke-black text-2xl cursor-pointer hover:fill-red-500 hover:stroke-none transition-colors" />
                        <img className="rounded-full object-cover w-[50px] h-[50px]" src={`https://api.digitallabor.com.br/${user?.avatar}`} width={50} height={50} alt="foto do usuário"/>
                        <FaSignOutAlt onClick={handleLogout} className="fill-none stroke-2 stroke-black text-2xl cursor-pointer hover:fill-red-500 hover:stroke-none transition-colors" />
                        </div>
                        }
                    </div>
                :
                <div>
                    {isClient &&
                     <div className="flex gap-4 items-center">
                        <Link href="/signUpPage" className="text-red-600 lg:text-xl sm:text-normal hover:text-red-700 transition-colors">Criar conta</Link>
                        <Link href="/signInPage"><button className="bg-red-500 rounded-lg text-white font-bold flex justify-center items-center hover:bg-red-800 transition-colors lg:p-3 w-24 h-10 sm:p-2">Entrar</button></Link>
                    </div>
                    }
                </div>}
            </div>

            <NavBar />
            {cart && <Cart onSetCart = {setCart} />}
        </>
    )
}