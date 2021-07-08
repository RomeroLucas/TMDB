import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//import de reducers
import controllers from './reducers/controllers'
import favorites from './reducers/favorites'

export const store = createStore(combineReducers({
    controllers,
    favorites,
}), composeWithDevTools())