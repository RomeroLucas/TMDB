const INITIAL_STATE = []

export default function favorites(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD-FAVORITE':
            
            return [...state, action.payload]
        
        case 'REMOVE-FAVORITE':

            return state

        case 'EMPTY-FAVORITE':

            return INITIAL_STATE
    
        default:
            return state
    }
}