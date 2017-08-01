import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { data } from './fetch-data'
import { searchItem } from './search'

const rootReducer = combineReducers({ data, searchItem, routing: routerReducer })

export default rootReducer