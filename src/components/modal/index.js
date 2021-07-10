import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

import './style.css'

export default function Modal(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({type: 'EMPTY-CART'})
        history.push('/')
    }

    return (
        <div id='modal'>
            <h1 className='modal-label'>{props.data.title}</h1>
            <p className='modal-label'>{props.data.message}</p>
            <button id='modal-button' onClick={handleClick}>Ir para loja</button>
        </div>
    )
}