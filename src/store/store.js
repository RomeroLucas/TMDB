import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//import de reducers
import controllers from './reducers/controllers'
import movies from './reducers/movies'
import cart from './reducers/cart'
import favorites from './reducers/favorites'

export const store = createStore(combineReducers({
    controllers,
    movies,
    cart,
    favorites,
}), composeWithDevTools())