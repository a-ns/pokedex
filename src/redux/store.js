import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/index'
import { loadState, saveState } from './localStorage'

const loggerMiddleware = createLogger()
const makeStore = () => {
    const persistedState = loadState()
    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware),   
    )
    store.subscribe(() => {
        saveState(store.getState())
    })
    return store
}



export default makeStore
