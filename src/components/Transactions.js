import React from 'react'
import {connect} from 'react-redux'
import {Table, Button} from 'react-bootstrap'

import {fetchTransactions} from '../state/transactions'
import {activateFilter} from '../state/valuesFilters'

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
  class Transactions extends React.Component {

    componentWillMount() {
      this.props.fetchTransactions()
    }


    render() {
      const {data} = this.props.transactions

      const filters = {
       value_incomes: transaction => transaction.value > 0,
        value_outcomes: transaction => transaction.value < 0
      }


      const buttons = [
        {
          label: 'Incomes',
          filterName: 'value_incomes'
        },
        {
          label: 'Outcomes',
          filterName: 'value_outcomes'
        },

      ]

      return (
        <div>
          {
            buttons.map(
              button => (
                <Button
                  key={button.filterName}
                  onClick={() => this.props.activateFilter(button.filterName)}
                  active={this.props.activeFilterNames.includes(button.filterName)}
                >
                  {button.label}
                </Button>
              )
            )
          }
          <Button onClick={this.props.resetFilters}>Reset</Button>
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
        </div>
      )
    }
  }
)