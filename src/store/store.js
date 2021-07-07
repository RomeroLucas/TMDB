import { createStore, combineReducers } from 'redux'

//import de reducers
import favorites from './reducers/favorites'

export const store = createStore(combineReducers(
    favorites,
))