// import de COMPONENTS
import ItemCart from './itemCart'

import './style.css'

//example
const item = {
    name : 'Nome do filme',
    qto: 1,
    price: 'R$ 9,99'
}

export default function Aside(props) {
    return (
        <aside className='container-aside container-aside-active'>
            <section>
                <span>{props.type}</span> <p>Esvaziar</p>
            </section>

            <section>
                {/* lista de filmes aqui */}
                <ItemCart item={item} />
                <ItemCart item={item} />
                <ItemCart item={item} />
                <ItemCart item={item} />
                <ItemCart item={item} />
                <ItemCart item={item} />
                <ItemCart item={item} />
                <ItemCart item={item} />
                <ItemCart item={item} />
                <ItemCart item={item} />
                <ItemCart item={item} />
                <ItemCart item={item} />
                
                
            </section>

            { props.type === "Meu Carrinho" ?
            <section>
                <span>Total: </span> <span>R$ 19,98</span>
                <button>Finalizar compra</button>
            </section>
            : null }
        </aside>
    )
}