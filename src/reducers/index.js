import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { categories, prodacts } from './fetch-data'
import { searchItem } from './search'
import { offset } from './setting'

const rootReducer = combineReducers({
	categories,
	searchItem,
	prodacts,
	offset,
	routing: routerReducer })

export default rootReducer