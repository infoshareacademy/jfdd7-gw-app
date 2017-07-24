/**
 * Created by arturwojciechowski on 11.07.17.
 */
import  { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import transactions, { fetchTransactions } from './state/transactions'
import valuesFilters from './state/valuesFilters'
import auth, {syncUser} from './state/auth'
import posts, {initTransactionsSync} from './state/posts'
import favs from './state/favs'

import firebase from 'firebase'

const reducer = combineReducers({
  transactions,
  valuesFilters,
  auth,
  posts,
  favs
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  )
))

firebase.initializeApp({
  apiKey: "AIzaSyBS-qsv9cYzvk7AhFsSS4mEd0uQwBOWx18",
  authDomain: "jfdd7-app-tomaszm.firebaseapp.com",
  databaseURL: "https://jfdd7-app-tomaszm.firebaseio.com",
  projectId: "jfdd7-app-tomaszm",
  storageBucket: "jfdd7-app-tomaszm.appspot.com",
  messagingSenderId: "119533206844"
})


firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(initTransactionsSync())
  }
  store.dispatch(syncUser(user))
})

store.dispatch(fetchTransactions())


export default store