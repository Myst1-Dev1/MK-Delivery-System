'use client'

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

export default function Contact() {
    return (
        <div className="py-10 mb-20 m-auto container">
            <h2 className="text-xl text-center font-bold">Teve algum problema com seu pedido? <br /> Nos envie uma mensagem</h2>
        
            <div className="max-w-[800px] m-auto mt-10 gap-10 grid place-items-center lg:grid-cols-2 sm: grid-cols-1">
                <form className="grid gap-5 grid-cols-1 place-items-center m-auto mt-10 lg:max-w-lg sm: max-w-80">
                    <input className="outline-none border border-gray-400 rounded-lg p-3 h-14 lg:w-96 sm: w-80" type="text" placeholder="Nome" />
                    <input className="outline-none border border-gray-400 rounded-lg p-3 w-full h-14" type="tel" placeholder="Telefone" />
                    <textarea className="outline-none resize-none border border-gray-400 rounded-lg p-3 w-full h-32" placeholder="Mensagem" />
                    <button className="p-3 w-full rounded-lg text-xl h-14 bg-red-500 text-white hover:bg-red-600 transition-colors">Enviar</button>
                </form>

                <div className="text-white bg-contactBg w-[300px] h-[360px]">
                    <div className="p-3">
                        <h4 className="text-xl font-bold mb-6">Não hesite em entrar em contato</h4>
                        <div className="flex gap-3 mb-6">
                            <FaMapMarkerAlt className="text-red-500" />
                            <div>
                                <h5 className="font-bold">Localização</h5>
                                <h6>Av. Lorem Ipsum 1406</h6>
                            </div>
                        </div>
                        <div className="flex gap-3 mb-6">
                            <FaEnvelope className="text-red-500" />
                            <div>
                                <h5 className="font-bold">Envie um email</h5>
                                <h6>mkdelivery@business.com</h6>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FaPhone className="text-red-500" />
                            <div>
                                <h5 className="font-bold">Ligue para nós</h5>
                                <h6>+55 (21) 55923-4875</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}