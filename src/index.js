import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import routes from './routes/routes'
import './index.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

ReactDOM.render(
              <Provider store={store}>
                <Router history={history}>
                  {routes}
                </Router>
            </Provider>,
  document.getElementById('root')
);
