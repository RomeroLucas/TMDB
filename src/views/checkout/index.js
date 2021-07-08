
import './style.css'

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

                </section>
            </form>
        </main>
    )
}