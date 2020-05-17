import {
    createStore,
    applyMiddleware
} from 'redux'
import {
    composeWithDevTools
} from 'redux-devtools-extension'
// 异步中间件
import thunk from 'redux-thunk'
import reducers from './reducers'

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))