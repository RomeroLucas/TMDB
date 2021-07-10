import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

//import de icons
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


import './style.css'

export default function Header() {
    const cart = useSelector(state => state.cart)
    const controllers = useSelector(state => state.controllers.aside)
    const dispatch = useDispatch()
    const history = useHistory()

    // controller para abrir e fechar o menu lateral do carrinho
    const handleController = (type) => {
        controllers === false ? dispatch({type: 'OPEN-CART', payload: type}) : dispatch({type: 'CLOSE-CART'}) 
    }

    // contador do carrinho
    let counter = cart.length > 0 ? <span id='cart-counter'>{cart.length}</span> : null

    return (
        <header className='container-header'>
            <div onClick={() => history.push('/')} >
                <span>LOGO</span>
            </div>

            <div>
                <input type='text' placeholder={`Pesquisa `} />
            </div>

            <div>
                <span onClick={() => handleController('Meus Favoritos')} ><FavoriteIcon /></span>
                <span onClick={() => handleController('Meu Carrinho')} ><ShoppingCartIcon />{counter}</span>
            </div>
        </header>
    )
}