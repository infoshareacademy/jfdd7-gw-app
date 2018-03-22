import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import Auth from './components/Auth'
import App from './components/App'

ReactDOM.render(
  <Provider store={store}>
    <Auth>
      <App/>
    </Auth> 
   
  </Provider>,
  document.getElementById('root')
)
