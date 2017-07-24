/**
 * Created by arturwojciechowski on 11.07.17.
 */
import  { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import transactions, { fetchTransactions } from './state/transactions'
import valuesFilters from './state/valuesFilters'
import favs from './state/favs'
import posts from './state/posts'

const reducer = combineReducers({
  transactions,
  valuesFilters,
  favs,
  posts
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  )
))

store.dispatch(fetchTransactions())

export default store