import { useSelector } from 'react-redux'
import { useState } from 'react'

//import de COMPONENTS
import ItemCart from '../../components/aside/itemCart'
import PayCheck from '../../components/payCheck'


import './style.css'


export default function Checkout() {
    const cartList = useSelector(state => state.cart)
    const modal = useSelector(state => state.controllers.modal)


    return (
        <main className='main-checkout'>
            {/* Modal render */}
            {modal}
            <h1>Finalizar Compra</h1>

            <form>
                {/* formulario esquerda */}
                <section>
                    <div><input className='input-full' type='text' placeholder='Nome Completo' /></div>
                    <div>
                        <input className='input-half' style={{width: '47%'}} type='text' placeholder='CPF' />
                        <input className='input-half' style={{width: '47%'}} type='tel' placeholder='Celular' />
                    </div>
                    <div><input className='input-full' type='email' placeholder='E-mail' /></div>
                    <div>
                        <input className='input-half' style={{width: '35%'}} type='text' placeholder='CEP' />
                        <input className='input-half' style={{width: '60%'}} type='text' placeholder='Endereço' />
                    </div>
                    <div>
                        <input className='input-half' style={{width: '47%'}} type='text' placeholder='Cidade' />
                        <input className='input-half' style={{width: '47%'}} type='text' placeholder='Estado' />
                    </div>
                </section>

                {/* formulario direita */}
                <section>
                    <div className='label'>
                        <span>Imagem</span>
                        <span>Nome</span>
                        <span>Qtd</span>
                        <span>Preço</span>
                    </div>

                    {/* lista inicio */}
                    <div className='checkout-list'>
                        {cartList.length > 0 ?
                        cartList.map(item => <ItemCart key={item.movie.id} item={item.movie} price={item.price} />) :
                        <p>Seu carrinho está vazio</p>}
                    </div>
                    {/* lista fim */}

                    {/* Paycheck */}
                    <PayCheck type='checkout-paycheck' />
                </section>


            </form>
        </main>
    )
}