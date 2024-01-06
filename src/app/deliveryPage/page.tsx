'use client'

import Image from "next/image"
import { FaRocketchat } from "react-icons/fa"
import { Chat } from "../components/chat"
import { useState } from "react"

export default function DeliveryPage() {
    const [chat, setChat] = useState(false);

    return (
        <>
            <div className="h-[calc(100vh - 110px)] px-3 py-10 container m-auto grid place-items-center lg:grid-cols-2 sm: grid-cols-1 gap-10">
                <div className="flex flex-col gap-5 lg:max-w-96 sm: max-w-80">
                    <h5 className="text-xl font-bold">Tempo de entrega: 18:00 - 18:45</h5>
                    <div className="flex gap-5">
                        <h6>O seu pedido está sendo preparado para ser entregue</h6>
                        <div className="animate-ping bg-yellow-300 h-3 w-3 rounded-full"></div>
                    </div>
                    <div>
                        <h5 className="text-xl font-bold">Pedido</h5>
                        <div className="flex flex-col gap-3 mt-4">
                            <div className="flex justify-between">
                                <h6>1 Temaki Hot Salmão</h6>
                                <h6>R$: 18,40</h6>
                            </div>
                            <div className="flex justify-between">
                                <h6>1 Temaki Hot Salmão</h6>
                                <h6>R$: 18,40</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold">Valor: R$: 36,80</h6>
                        <h6 className="text-xl font-bold mt-3">Pagamento: Cartão</h6>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaRocketchat onClick={() => setChat(true)} className="text-2xl cursor-pointer" />
                        <h6 className="text-xl font-bold">Chat</h6>
                    </div>
                </div>
                <Image src="/images/deliveryImage.webp" width={400} height={400} alt="imagem da página de entrega" />
            </div>
            {chat && <Chat  onSetChat={setChat} />}
        </>
    )
}