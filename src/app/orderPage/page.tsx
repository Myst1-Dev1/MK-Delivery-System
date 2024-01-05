'use client'

export default function OrderPage() {
    return (
        <div className="py-10 container m-auto">
            <h2 className="text-center text-2xl font-bold">Seu pedido</h2>
            <div className="flex gap-10 flex-col m-auto mt-10 mb-20 lg:max-w-96 sm: max-w-80">
                <div>
                    <h5 className="text-xl font-bold">Endereço</h5>
                    <h6>Rua Lorem Ipsum 14</h6>
                </div>
                <div>
                    <h5 className="text-xl font-bold">Items</h5>
                    <div className="flex justify-between">
                        <h6>1 Takoyaki</h6>
                        <h6>R$: 17,90</h6>
                    </div>
                    <div className="flex justify-between">
                        <h6>1 Takoyaki</h6>
                        <h6>R$: 17,90</h6>
                    </div>
                </div>
                <div>
                    <h5 className="text-xl font-bold">Forma de pagamento</h5>
                    <select className="mt-5 text-gray-400 outline-none border border-gray-400 rounded-lg p-2 h-14 w-full">
                        <option value="Cartão">Cartão</option>
                        <option value="Dinheiro">Dinheiro</option>
                    </select>
                </div>
                <div>
                    <h5 className="text-xl font-bold">Algumas observações</h5>
                    <textarea className="mt-5 text-gray-400 outline-none resize-none border border-gray-400 rounded-lg p-2 h-28 w-full" placeholder="Bastante molho"/>
                </div>
                <div className="flex justify-between">
                    <h5 className="text-xl font-bold">Total</h5>
                    <h6 className="text-xl font-bold">R$: 35,80</h6>
                </div>
                <button className="p-3 w-full rounded-lg text-xl h-14 bg-red-500 text-white hover:bg-red-600 transition-colors">Fazer Pedido</button>
            </div>
        </div>
    )
}