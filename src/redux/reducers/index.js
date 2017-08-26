import { combineReducers } from 'redux'
import { glanceReducer } from './glanceReducer'
import { detailedReducer } from './detailedReducer'

export default combineReducers({glance: glanceReducer, detailed: detailedReducer})