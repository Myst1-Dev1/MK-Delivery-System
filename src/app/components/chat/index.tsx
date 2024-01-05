import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { FaTimes, FaPaperPlane } from "react-icons/fa";

interface ChatProps {
    onSetChat:Dispatch<SetStateAction<boolean>>
}

export function Chat({ onSetChat }:ChatProps) {
    return (
        <div className="transition-opacity bg-white border border-gray-300 fixed bottom-0 right-0 max-w-96 z-50 lg:h-96 sm: w-full h-screen">
            <div className="bg-chatBg">
                <div className="flex gap-3 items-center py-3 px-3">
                    <Image src="/images/userImage.webp" height={40} width={40} alt="imagem do adm no chat" />    
                    <h6 className="font-bold text-xl">ADM</h6>
                </div>
                <FaTimes onClick={() => onSetChat(false)} className="cursor-pointer absolute top-4 right-4" />
            </div>

            <div className="overflow-y-scroll no-scrollbar py-3 px-3 flex flex-col gap-5 lg:h-[250px] sm: h-[700px]">
                <div className="relative bg-chatBg p-3 rounded-lg">
                    <p className="text-xs w-[90%]">Senhor tivemos um problema com seu pedido, devido ao endereço estar
                        errado, o entregador se perdeu.
                    </p>
                    <time className="text-gray-600 text-xs absolute right-4 bottom-1">18:14</time>
                </div>
                <div className="relative border border-gray-300 p-3 rounded-lg">
                    <p className="text-xs w-[90%]">Perdão, entrarei em contato com o entregador</p>
                    <time className="text-gray-600 text-xs absolute right-4 bottom-1">18:16</time>
                </div>
                <div className="relative bg-chatBg p-3 rounded-lg">
                    <p className="text-xs w-[90%]">Obrigado o entregador já está a caminho</p>
                    <time className="text-gray-600 text-xs absolute right-4 bottom-1">18:20</time>
                </div>
                <div className="relative border border-gray-300 p-3 rounded-lg">
                    <p className="text-xs w-[90%]">Recebi o meu pedido muito obrigado pela atenção!</p>
                    <time className="text-gray-600 text-xs absolute right-4 bottom-1">18:25</time>
                </div>
            </div>
            
            <div className="border border-t-gray-300 absolute bottom-0 right-0 left-0 py-3">
                <div className="flex items-center gap-3 px-3">
                    <FaPaperPlane className="text-gray-400" />
                    <input className="outline-none w-full" type="text" placeholder="Enviar mensagem"/>
                </div>
            </div>
        </div>
    )
}