import Modal from '../../components/modal'

const INITIAL_STATE = {
    aside: false,
    display: false,
    modal: false
}

export default function controllers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'OPEN-CART':
            
            return  state = { aside: action.payload, display: "container-aside-active" }

        case 'CLOSE-CART':
        
            return state = INITIAL_STATE
        
        case 'MODAL-SUCCESS':
            
            return state = { modal: <Modal data={{title: 'Obrigado Uzumaki Naruto!', message: 'Sua compra foi finalizada com sucesso!'}} /> }

        case 'MODAL-FAILED':
        
            return state = { modal: <Modal data={{title: 'Falha ao realizar a compra!', message: 'Adicione filmes ao carrinho para comprar!'}} /> }

        default:
            return state
    }
}