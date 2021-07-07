const INITIAL_STATE = false

export default function favorites(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            
            return state
    
        default:
            return state
    }
}