
import React from 'react'

export default class History extends React.Component {

  state = {
    transactions: []
  }

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/transactions.json'
    ).then(
      response => response.json()
    ).then(
      transactions => this.setState({
        transactions
      })
    )
  }

  render() {
    const transactionId = parseInt(this.props.match.params.transactionId, 10)
    const transaction = this.state.transactions.find(
      transaction => transaction.id === transactionId
    )

    if (transaction === undefined) {
      return (
        <div>
          <h1>Not found yet...</h1>
        </div>
      )
    }


    return (
      <div>
        <h1>Transaction card {transactionId}</h1>
      </div>
    )
  }
}