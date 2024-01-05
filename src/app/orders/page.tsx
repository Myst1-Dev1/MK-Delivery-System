'use client'

import Image from "next/image"

export default function Orders() {
    return (
        <div className="py-10 mb-28 container m-auto">
            <h2 className="font-bold text-2xl text-center">Histórico de pedidos</h2>
            <div className="mt-10 grid place-items-center lg:grid-cols-4 sm: grid-cols-1 gap-5">
                <div>
                    <h6>Sabado, 14 de Maio de 2023</h6>
                    <div className="flex flex-col mt-3 border border-gray-300 rounded-lg w-72">
                        <div className="flex items-center gap-3 p-3">
                            <Image src="/images/successImage.webp" width={20} height={20} alt="imagem de pedido concluido" />
                            <h6>Pedido concluido Nº 150</h6>
                        </div>
                        <div className="p-3">
                            <div className="flex justify-between">
                                <h6>1 Temaki Salmão</h6>
                                <h6>R$:18,00</h6>
                            </div>
                            <div className="flex justify-between">
                                <h6>1 Temaki Salmão</h6>
                                <h6>R$:18,00</h6>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <h6>Total</h6>
                            <h6>R$:36,00</h6>
                        </div>
                        <div className="border border-t-gray-300">
                            <h6 className="text-red-600 p-3 cursor-pointer hover:text-red-800 transition-colors">Adicionar ao carrinho</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Sabado, 14 de Maio de 2023</h6>
                    <div className="flex flex-col mt-3 border border-gray-300 rounded-lg w-72">
                        <div className="flex items-center gap-3 p-3">
                            <Image src="/images/successImage.webp" width={20} height={20} alt="imagem de pedido concluido" />
                            <h6>Pedido concluido Nº 150</h6>
                        </div>
                        <div className="p-3">
                            <div className="flex justify-between">
                                <h6>1 Temaki Salmão</h6>
                                <h6>R$:18,00</h6>
                            </div>
                            <div className="flex justify-between">
                                <h6>1 Temaki Salmão</h6>
                                <h6>R$:18,00</h6>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <h6>Total</h6>
                            <h6>R$:36,00</h6>
                        </div>
                        <div className="border border-t-gray-300">
                            <h6 className="text-red-600 p-3 cursor-pointer hover:text-red-800 transition-colors">Adicionar ao carrinho</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Sabado, 14 de Maio de 2023</h6>
                    <div className="flex flex-col mt-3 border border-gray-300 rounded-lg w-72">
                        <div className="flex items-center gap-3 p-3">
                            <Image src="/images/successImage.webp" width={20} height={20} alt="imagem de pedido concluido" />
                            <h6>Pedido concluido Nº 150</h6>
                        </div>
                        <div className="p-3">
                            <div className="flex justify-between">
                                <h6>1 Temaki Salmão</h6>
                                <h6>R$:18,00</h6>
                            </div>
                            <div className="flex justify-between">
                                <h6>1 Temaki Salmão</h6>
                                <h6>R$:18,00</h6>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <h6>Total</h6>
                            <h6>R$:36,00</h6>
                        </div>
                        <div className="border border-t-gray-300">
                            <h6 className="text-red-600 p-3 cursor-pointer hover:text-red-800 transition-colors">Adicionar ao carrinho</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Sabado, 14 de Maio de 2023</h6>
                    <div className="flex flex-col mt-3 border border-gray-300 rounded-lg w-72">
                        <div className="flex items-center gap-3 p-3">
                            <Image src="/images/successImage.webp" width={20} height={20} alt="imagem de pedido concluido" />
                            <h6>Pedido concluido Nº 150</h6>
                        </div>
                        <div className="p-3">
                            <div className="flex justify-between">
                                <h6>1 Temaki Salmão</h6>
                                <h6>R$:18,00</h6>
                            </div>
                            <div className="flex justify-between">
                                <h6>1 Temaki Salmão</h6>
                                <h6>R$:18,00</h6>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <h6>Total</h6>
                            <h6>R$:36,00</h6>
                        </div>
                        <div className="border border-t-gray-300">
                            <h6 className="text-red-600 p-3 cursor-pointer hover:text-red-800 transition-colors">Adicionar ao carrinho</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}