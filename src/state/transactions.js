// action types
const FETCH__BEGIN = 'transactions/FETCH__BEGIN'
const FETCH__SUCCESS = 'transactions/FETCH__SUCCESS'
const FETCH__FAIL = 'transactions/FETCH__FAIL'
const ADD = 'transactions/ADD'

export const add = transaction => ({
  type: ADD,
  transaction
})

// action creators
const fetchBegin = () => ({
  type: FETCH__BEGIN
})

const fetchSuccess = data => ({
  type: FETCH__SUCCESS,
  data
})

const fetchFail = error => ({
  type: FETCH__FAIL,
  error
})

// Fetching data from server (using redux-thunk)
export const fetchTransactions = () => dispatch => {
  dispatch(fetchBegin())
  return fetch(
    process.env.PUBLIC_URL + '/data/transactions.json'
  ).then(
    response => response.json()
  ).then(
    data => dispatch(fetchSuccess(data))
  ).catch(
    error => dispatch(fetchFail(error))
  )
}

// initial state
const initialState = {
  data: null,
  fetching: false,
  error: null
}

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case FETCH__SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.data
      }
    case FETCH__FAIL:
      return {
        ...state,
        error: action.error,
        fetching: false
      }
    case ADD:
      return {
        ...state,
        data: [action.transaction].concat(state.data)
      }
    default:
      return state
  }
}

