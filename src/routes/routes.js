import React from 'react'
import { Route } from 'react-router'
import App from '../views/App/App'
import Account from '../views/Account'
import Products from '../views/Products'

export default (
    <Route path="/" component={App}>
        <Route path="account" component={Account} />
        <Route path="products" component={Products} />
    </Route>
)