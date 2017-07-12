/**
 * Created by arturwojciechowski on 11.07.17.
 */
import  { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import transactions from './state/transactions'

// import counter from './state/counter'
// import students from './state/students'
// import favoriteStudents from './state/favoriteStudents'
// import groups from './state/groups'

const reducer = combineReducers({
  // counter,
  // students,
  // favoriteStudents,
  // groups
  transactions
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  )
))

export default store