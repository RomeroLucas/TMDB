import { useDispatch } from 'react-redux'

//import de ICONS
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'

import './style.css'

export default function MovieContainer(props) {
    const dispatch = useDispatch()

    return (
        <div className='container-movie'>
            <span className='favorite'><FavoriteIcon /></span>
            <span className='container-image'></span>
            <p style={{fontWeight: 'bolder'}}>{props.data.title}</p>
            <p><span><StarIcon style={{color: 'yellow'}} /> {props.data.vote_average}</span><span>{props.data.original_language}</span></p>
            <p>R$ {props.data.vote_average}</p>
            <button onClick={() => dispatch({type: 'ADD-CART', payload: { movie: props.data, price: props.data.vote_average}})} >Adicionar</button>
        </div>
    )
}