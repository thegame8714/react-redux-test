import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import account from './modules/account/reducer'

export default combineReducers({
    router,
    account
})