//import de COMPONENTS
import ItemCart from '../../components/aside/itemCart'
import PayCheck from '../../components/payCheck'

import './style.css'

//example
const item = {
    name : 'Nome do filme',
    qto: 1,
    price: 'R$ 9,99'
}

export default function Checkout() {
    return (
        <main className='main-checkout'>
            <h1>Finalizar Compra</h1>

            <form>
                {/* formulario esquerda */}
                <section>
                    <div><input className='input-full' type='text' placeholder='Nome Completo' /></div>
                    <div>
                        <input className='input-half' style={{width: '47%'}} type='text' placeholder='CPF' />
                        <input className='input-half' style={{width: '47%'}} type='text' placeholder='Celular' />
                    </div>
                    <div><input className='input-full' type='text' placeholder='E-mail' /></div>
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
                        <ItemCart item={item} />
                        <ItemCart item={item} />
                        <ItemCart item={item} />
                        <ItemCart item={item} />
                        <ItemCart item={item} />
                        <ItemCart item={item} />
                    </div>
                    {/* lista fim */}

                    {/* Paycheck */}
                    <PayCheck type='checkout-paycheck' />
                </section>


            </form>
        </main>
    )
}