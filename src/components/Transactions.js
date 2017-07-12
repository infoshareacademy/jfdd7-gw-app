import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'

import {fetchTransactions} from '../state/transactions'

export default connect(
  state => ({
    transactions: state.transactions
  }),

  dispatch => ({
    fetchTransactions: () => dispatch(fetchTransactions())
  })
)(
  class Transactions extends React.Component {

    componentWillMount() {
      this.props.fetchTransactions()
    }

// class Histories extends React.Component {
//
//   state = {
//     transactions: []
//   }
//
//   componentWillMount() {
//     fetch(
//       process.env.PUBLIC_URL + '/data/transactions.json'
//     ).then(
//       response => response.json()
//     ).then(
//       transactions => this.setState({
//         transactions
//       })
//     ).catch(
//       error => console.log(error.message)
//     )
//   }

    render() {
      const {data, fetching, error} = this.props.transactions
      return (
        <div>
          <h1>Transactions</h1>
          <ul>

            { data !== null && data.map(
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
)