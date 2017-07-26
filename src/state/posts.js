import firebase from 'firebase'

const SYNC = 'transactions/SYNC'

const syncTransactions = transactions => ({
  type: SYNC,
  transactions
})

export const initTransactionsSync = () => dispatch => {
  const userId = firebase.auth().currentUser.uid
  firebase.database().ref('transactions/' + userId).on(
    'value',
    snapshot => {
      const val = snapshot.val() || {}
      const transactions = Object.keys(val).map(
        uid => ({...val[uid], uid})
      )
      dispatch(syncTransactions(transactions))
    }
  )
}

export const createTransaction = data => dispatch => {
  const userId = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('transactions/' + userId).push()
  ref.set({
    date: data.date,
    value: parseFloat(data.value),
    title: data.title,
    category: data.category,
    author: firebase.auth().currentUser.displayName
  })
}

export const updateTransaction = (uid, data) => dispatch => {
  const userId = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('transactions/' + userId + '/' + uid)
  ref.update({
    date: data.date,
    value: data.value,
    title: data.title,
    category: data.category
  })
}

export const deleteTransaction = uid => dispatch => {
  const userId = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('/transactions/' + userId + '/' + uid)
  ref.remove()
}

const initialState = {
  data: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SYNC:
      return {
        ...state,
        data: action.transactions
      }
    default:
      return state
  }
}

