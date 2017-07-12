import React from 'react'
import {connect} from 'react-redux'
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


    render() {
      const {data} = this.props.transactions
      return (
        <div>
          <Table bordered striped hover responsive>
            <thead>
            <tr>
              <th>numer</th>
              <th>data</th>
              <th>wartość</th>
              <th>kategoria</th>
            </tr>
            </thead>
            <tbody>
            {
              data !== null && data.map(
                transaction => (
                  <tr key={transaction.id}>
                    <td>
                      { transaction.id }
                    </td>
                    <td>
                      { transaction.date }
                    </td>
                    <td>
                      { transaction.value }
                    </td>
                    <td>
                      { transaction.category }
                    </td>
                  </tr>
                )
              )
            }
            </tbody>
          </Table>
        </div>
      )
    }
  }
)