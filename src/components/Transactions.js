import React from 'react'

// import { Link } from 'react-router-dom'

export default class Histories extends React.Component {

  state = {
    transactions: []
  }

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/data/transactions.json'
    ).then(
      response => response.json()
    ).then(
      transactions => this.setState({
        transactions
      })
    ).catch(
      error => console.log(error.message)
    )
  }

  render() {
    return (
      <div>
        <h1>Transactions</h1>
        <ul>
          { this.state === null ? <p>Fetching data ....</p> : null}
          {
            this.state !== null && this.state.transactions.map(
              transaction => (
                <li key={transaction.id}>
                  {
                    Object.keys(transaction).map(
                      key => <span>{transaction[key]}</span>
                    )
                  }
                  {/*{transaction.date}, {transaction.value}, {transaction.category}*/}
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}