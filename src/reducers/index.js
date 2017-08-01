import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { categories } from './fetch-data'
import { searchItem } from './search'

const rootReducer = combineReducers({ categories, searchItem, routing: routerReducer })

export default rootReducer