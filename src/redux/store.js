import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/index'

const loggerMiddleware = createLogger()
const makeStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}

export default makeStore
