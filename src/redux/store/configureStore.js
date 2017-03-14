import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../rootReducer'

const configureStore = (initialState = {}, history) => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )

    if (module.hot) {
        module.hot.accept('../rootReducer', () => {
            const nextRootReducer = require('../rootReducer').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore