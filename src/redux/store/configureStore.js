import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../rootReducer'

const configureStore = (initialState = {}, history) => {
    const store = createStore(
        rootReducer,
        compose(
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