import { useSelector, useDispatch } from 'react-redux'

// import de COMPONENTS
import ItemCart from './itemCart'
import PayCheck from '../payCheck'

import './style.css'



export default function Aside(props) {
    const controllers = useSelector(state => state.controllers.display)
    const cartList = useSelector(state => state.cart)
    const favList = useSelector(state => state.favorites)
    const dispatch = useDispatch()

    let render
    if( props.type === "Meu Carrinho" && cartList.length > 0 ) {
        render = cartList.map(item => <ItemCart key={item.movie.id} item={item.movie} price={item.price} />)
    } else if(props.type === "Meus Favoritos" && favList.length > 0) {
        render = favList.map(item => <ItemCart key={item.movie.id} item={item.movie} price={item.price} />)
    }


    return (
        <aside className={`container-aside ${controllers}`}>
            <section>
                <span>{props.type}</span> <p onClick={() => dispatch({type: 'EMPTY-CART'})}>Esvaziar</p>
            </section>

            <section>
                {/* lista de filmes aqui */}
                {
                    // render cart
                    // props.type === "Meu Carrinho" && cartList.length > 0 ?
                    // cartList.map(item => <ItemCart key={item.movie.id} item={item.movie} price={item.price} />) :
                    // <p>Seu carrinho está vazio</p>
                    render
                }
    
                
            </section>

            {/* Container de pagamento */}
            { props.type === "Meu Carrinho" ? <PayCheck /> : null }
        </aside>
    )
}