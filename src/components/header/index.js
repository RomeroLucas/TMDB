import { useDispatch, useSelector } from 'react-redux'

//import de icons
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


import './style.css'

export default function Header() {
    const controllers = useSelector(state => state.controllers.aside)
    const dispatch = useDispatch()

    const handleController = (type) => {
        controllers === false ? dispatch({type: 'OPEN-CART', payload: type}) : dispatch({type: 'CLOSE-CART'}) 
    }

    return (
        <header className='container-header'>
            <div>
                <span>LOGO</span>
            </div>

            <div>
                <input type='text' placeholder={`Pesquisa `} />
            </div>

            <div>
                <span onClick={() => handleController('Meus Favoritos')} ><FavoriteIcon /></span>
                <span onClick={() => handleController('Meu Carrinho')} ><ShoppingCartIcon /></span>
            </div>
        </header>
    )
}