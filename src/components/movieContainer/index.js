

//import de ICONS
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'

import './style.css'

export default function MovieContainer(props) {
    return (
        <div className='container-movie'>
            <span className='favorite'><FavoriteIcon /></span>
            <span className='container-image'></span>
            <p style={{fontWeight: 'bolder'}}>{props.data.name}</p>
            <p><span><StarIcon style={{color: 'yellow'}} /> {props.data.rating}</span><span>{props.data.gender}</span></p>
            <p>R$ {props.data.price}</p>
            <button>Adicionar</button>
        </div>
    )
}