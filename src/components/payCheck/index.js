import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import './style.css'

export default function PayCheck(props) {
    const cartList = useSelector(state => state.cart)
    const history = useHistory()
    const dispatch = useDispatch()

    let sum = 0.00

    sum = cartList.reduce((acc, obj) => {return acc + obj.price}, 0 )

    return (
        <div className={`container-paycheck ${props.type}`}>
            <span>Total: </span> <span>R$ {sum}</span>
            <button onClick={() => {history.push('/checkout'); dispatch({type: "CLOSE-CART"})}}>Finalizar compra</button>
        </div>
    )
}