import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

// import de COMPONENTS
import ItemCart from './itemCart'
import PayCheck from '../payCheck'

import './style.css'

//example
const item = {
    name : 'Nome do filme',
    qto: 1,
    price: 'R$ 9,99'
}

export default function Aside(props) {
    const controllers = useSelector(state => state.controllers.display)
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <aside className={`container-aside ${controllers}`}>
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

            {/* Container de pagamento */}
            { props.type === "Meu Carrinho" ? <PayCheck /> : null }
        </aside>
    )
}