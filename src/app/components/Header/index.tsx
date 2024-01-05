'use client'

import Link from "next/link";
import { NavBar } from "../NavBar";
import { Cart } from "../cart";
import { useState } from "react";

export function Header() {
    const [cart, setCart] = useState(false);

    return (
        <>
            <div className="container m-auto mt-3 flex justify-between items-center sm: px-3">
                <h1 className="font-bold lg:text-3xl sm:text-xl">M&K Delivery</h1>
                <div className="flex gap-4 items-center">
                    <Link href="/signUpPage" className="text-red-600 lg:text-xl sm:text-normal hover:text-red-700 transition-colors">Criar conta</Link>
                    <Link href="/signInPage"><button className="bg-red-500 rounded-lg text-white font-bold flex justify-center items-center hover:bg-red-800 transition-colors lg:p-3 w-24 h-10 sm:p-2">Entrar</button></Link>
                </div>
            </div>
            {/* <button onClick={() => setCart(true)}>abrir carrinho</button> */}

            <NavBar />
            {cart && <Cart onSetCart = {setCart} />}
        </>
    )
}