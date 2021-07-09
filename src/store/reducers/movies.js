const INITIAL_STATE = false 

export default function movies(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD-MOVIES':
            
            return action.payload
    
        default:
            return state
    }
}