
//import de ICONS
import DeleteIcon from '@material-ui/icons/Delete'

import './style.css'

export default function ItemCart(props) {
    return (
        <div className='item-cart'>
            <span className='item-info'>IMG</span>
            <span className='item-info'>{props.item.name}</span>
            <span className='item-info'>{props.item.qto}</span>
            <span className='item-info'>{props.item.price}</span>
            <span className='item-info'><DeleteIcon /></span>
        </div>
    )
}