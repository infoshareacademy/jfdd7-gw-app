/**
 * Created by arturwojciechowski on 21.07.17.
 */
import React from 'react'
import firebase from 'firebase'

class AddTransactionForm1 extends React.Component {

  state = {
    transactions: []
  }

  componentWillMount() {
    firebase.database().ref('transactions').on(
      'value',
      snapshot => {
        const val = snapshot.val()
        const transactions = Object.keys(val).map(key => ({...val[key], id: key }))
        // console.log(transactions)
        this.setState({ transactions: transactions })

      }
    )
  }

  render() {
    return (
      <div>
        <h1>Transakcje</h1>
        {
          this.state.transactions.map(
            transaction => (
              <div key={transaction.id}>{transaction.content}</div>
            )
          )
        }
      </div>
    )
  }
}

export default AddTransactionForm1