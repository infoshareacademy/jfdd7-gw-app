import React from 'react'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'
import {activateFilter} from '../state/valuesFilters'

import {fetchTransactions} from '../state/transactions'


export default connect(
  state => ({
    transactions: state.transactions,
    activeFilterNames: state.valuesFilters.activeFilterNames

  }),

  dispatch => ({
    fetchTransactions: () => dispatch(fetchTransactions()),
    activateFilter: (name) => dispatch(activateFilter(name)),
    resetFilters: () => dispatch({ type: 'RESET' })

  })
)(
  class TableData extends React.Component {
    render() {
      const {data} = this.props.transactions
      const filters = {
        value_incomes: transaction => transaction.value > 0,
        value_outcomes: transaction => transaction.value < 0
      }
      return (
        <Table bordered striped hover responsive>
          <thead>
          <tr>
            <th>data</th>
            <th>wartość</th>
            <th>kategoria</th>
          </tr>
          </thead>
          <tbody>
          {
            data !== null && data.filter(
              transaction => this.props.activeFilterNames.map(
                filterName => filters[filterName] || (() => true)
              ).every(
                f => f(transaction) === true
              )
            ).sort((a, b) => (new Date(b.date)) - (new Date(a.date))).map(
              transaction => (
                <tr key={transaction.id}>
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
      )
    }
  }
)