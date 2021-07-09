import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import './style.css'

export default function PayCheck(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div className={`container-paycheck ${props.type}`}>
            <span>Total: </span> <span>R$ 19,98</span>
            <button onClick={() => {history.push('/checkout'); dispatch({type: "CLOSE-CART"})}}>Finalizar compra</button>
        </div>
    )
}