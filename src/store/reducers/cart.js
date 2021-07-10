const INITIAL_STATE = []

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD-CART':
            
            return [...state, action.payload]
        
        case 'REMOVE-CART':

            return state

        case 'EMPTY-CART':

            return INITIAL_STATE
    
        default:
            return state
    }
}