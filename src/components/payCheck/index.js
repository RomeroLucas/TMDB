import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import './style.css'

export default function PayCheck(props) {
    const cartList = useSelector(state => state.cart)
    const history = useHistory()
    const dispatch = useDispatch()

    let sum = 0.00

    sum = cartList.reduce((acc, obj) => {return acc + obj.price}, 0 )

    const handleClick = () => {
        history.push('/checkout'); dispatch({type: "CLOSE-CART"})
    }
    const finishHandle = (e) => {
        e.preventDefault()
        cartList.length > 0 ? dispatch({type: 'MODAL-SUCCESS'}) : dispatch({type: 'MODAL-FAILED'})
    }

    return (
        <div className={`container-paycheck ${props.type}`}>
            <span>Total: </span> <span>R$ {sum}</span>
            {
                props.type === 'checkout-paycheck' ?
                <button onClick={finishHandle}>Finalizar</button> :
                <button onClick={handleClick}>Finalizar compra</button>
            }
            
        </div>
    )
}