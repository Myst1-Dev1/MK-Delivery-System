import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { FaTimes, FaTrashAlt } from "react-icons/fa";

interface CartProps {
    onSetCart:Dispatch<SetStateAction<boolean>>
}

export function Cart({ onSetCart }:CartProps) {
    return (
        <div className="bg-overlay w-full h-screen fixed top-0 left-0 z-10">
            <div className="bg-white h-screen w-[390px] absolute right-0 top-0 flex flex-col justify-between">
                <div className="py-3 px-3">
                    <div className="lg:mb-3 sm: mb-0">
                        <h2 className="text-2xl font-bold">Meus Pedidos</h2>
                        <FaTimes onClick = {() => onSetCart(false)} className="cursor-pointer absolute right-4 top-4" />
                    </div>
                    <div className="px-3 rounded overflow-y-scroll cartContainer 2xl:h-[390px] xl: h[410px] lg:h-[300px] md:h-[410px] sm: h-[500px]">
                        <div className="flex justify-between mt-10">
                            <div className="flex gap-3">
                                <Image className="w-[100px] h-[100px] object-cover" src = "/images/sushi.webp" width={100} height={100} alt = "imagem do produto presente no carrinho" />
                                <div>
                                    <h6 className="text-xl font-bold">Hot roll</h6>
                                    <span className="text-xs">1 Porção</span>
                                    <h6 className=" mt-5 text-xl font-bold">R$:18,00</h6>
                                </div>
                            </div>
                            <div className="flex items-end justify-between flex-col">
                                <div className="flex">
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">-</div>
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">01</div>
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">+</div>
                                </div>
                                <FaTrashAlt className="text-red-500 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-10">
                            <div className="flex gap-3">
                                <Image className="w-[100px] h-[100px] object-cover" src = "/images/sushi.webp" width={100} height={100} alt = "imagem do produto presente no carrinho" />
                                <div>
                                    <h6 className="text-xl font-bold">Hot roll</h6>
                                    <span className="text-xs">1 Porção</span>
                                    <h6 className=" mt-5 text-xl font-bold">R$:18,00</h6>
                                </div>
                            </div>
                            <div className="flex items-end justify-between flex-col">
                                <div className="flex">
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">-</div>
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">01</div>
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">+</div>
                                </div>
                                <FaTrashAlt className="text-red-500 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-10">
                            <div className="flex gap-3">
                                <Image className="w-[100px] h-[100px] object-cover" src = "/images/sushi.webp" width={100} height={100} alt = "imagem do produto presente no carrinho" />
                                <div>
                                    <h6 className="text-xl font-bold">Hot roll</h6>
                                    <span className="text-xs">1 Porção</span>
                                    <h6 className=" mt-5 text-xl font-bold">R$:18,00</h6>
                                </div>
                            </div>
                            <div className="flex items-end justify-between flex-col">
                                <div className="flex">
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">-</div>
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">01</div>
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">+</div>
                                </div>
                                <FaTrashAlt className="text-red-500 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-10">
                            <div className="flex gap-3">
                                <Image className="w-[100px] h-[100px] object-cover" src = "/images/sushi.webp" width={100} height={100} alt = "imagem do produto presente no carrinho" />
                                <div>
                                    <h6 className="text-xl font-bold">Hot roll</h6>
                                    <span className="text-xs">1 Porção</span>
                                    <h6 className=" mt-5 text-xl font-bold">R$:18,00</h6>
                                </div>
                            </div>
                            <div className="flex items-end justify-between flex-col">
                                <div className="flex">
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">-</div>
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">01</div>
                                    <div className="flex justify-center items-center w-10 h-10 border border-gray-400 p-2 cursor-pointer hover:bg-red-600 transition-colors">+</div>
                                </div>
                                <FaTrashAlt className="text-red-500 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 px-3">
                    <div className="flex justify-between">
                        <h6>Subtotal</h6>
                        <h6 className="text-red-600">R$:52,00</h6>
                    </div>
                    <div className="flex justify-between mt-5">
                        <h6>Total(BRL)</h6>
                        <h6 className="text-red-600">R$:52,00<span className="text-gray-400">(R$:5,00)</span></h6>
                    </div>
                    <button className="mt-4 rounded-lg border border-gray-300 p-3 w-full h-14 text-black hover:bg-red-600 transition-colors">Continuar comprando</button>
                    <button className="mt-4 rounded-lg bg-red-500 text-white p-3 w-full h-14 hover:bg-red-600 transition-colors">Seguir para pagamento</button>
                </div>
        </div>
        </div>
    )
}