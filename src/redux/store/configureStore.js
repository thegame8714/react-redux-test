import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../rootReducer'

const configureStore = (initialState = {}, history) => {
    let api = {}
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk.withExtraArgument(api), routerMiddleware(history))
        )
    )

    if (module.hot) {
        module.hot.accept('../rootReducer', () => {
            const nextRootReducer = require('../rootReducer').default
            store.replaceReducer(nextRootReducer)
        })
    }
    
    //Here add the services for the api like this:
    //api.user = require('../services/UserService').apply(this, [store])

    return store
}

export default configureStore