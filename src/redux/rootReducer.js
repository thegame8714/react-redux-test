import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import account from './modules/account/reducer'

export default combineReducers({
    router,
    account,
    form: formReducer
})