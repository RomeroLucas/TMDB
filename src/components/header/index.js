
//import de icons
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


import './style.css'

export default function Header() {
    return (
        <header className='container-header'>
            <div>
                <span>LOGO</span>
            </div>

            <div>
                <input type='text' placeholder={`Pesquisa `} />
            </div>

            <div>
                <span><FavoriteIcon /></span>
                <span><ShoppingCartIcon /></span>
            </div>
        </header>
    )
}