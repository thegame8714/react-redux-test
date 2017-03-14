import React from 'react'
import { Route } from 'react-router'
import App from '../views/App/App'
import Account from '../views/Account/Account'
import Form from '../views/Form/Form'

export default (
    <Route path="/" component={App}>
        <Route path="account" component={Account} />
        <Route path="form" component={Form} />
    </Route>
)