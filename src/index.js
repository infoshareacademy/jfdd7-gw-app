import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import App from './components/App'
import firebase from 'firebase'
import { syncUser } from './state/auth'

firebase.initializeApp({
  apiKey: "AIzaSyCDaaDWi8xmUACC74ngttQsjEMO2zHBSRw",
  authDomain: "jfdd7-app.firebaseapp.com",
  databaseURL: "https://jfdd7-app.firebaseio.com",
  projectId: "jfdd7-app",
  storageBucket: "jfdd7-app.appspot.com",
  messagingSenderId: "287623145678"
})

firebase.auth().onAuthStateChanged(user => store.dispatch(syncUser(user)))


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
