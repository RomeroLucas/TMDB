const INITIAL_STATE = {
    aside: false,
    display: false
}

export default function controllers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'OPEN-CART':
            
            return  state = { aside: action.payload, display: "container-aside-active" }

        case 'CLOSE-CART':
        
            return state = INITIAL_STATE
    
        default:
            return state
    }
}