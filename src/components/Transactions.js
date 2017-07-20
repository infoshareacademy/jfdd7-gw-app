import React from 'react'
import {connect} from 'react-redux'
import {Table, Button, Grid} from 'react-bootstrap'

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
          filterName: 'value_incomes',
          style: 'success'
        },
        {
          label: 'Outcomes',
          filterName: 'value_outcomes',
          style: 'danger'
        },

      ]

      return (
        <Grid>
          {
            buttons.map(
              button => (
                <Button
                  bsStyle={button.style}
                  key={button.filterName}
                  onClick={() => this.props.activateFilter(button.filterName)}
                  active={this.props.activeFilterNames.includes(button.filterName)}
                >
                  {button.label}
                </Button>
              )
            )
          }
          <Button onClick={this.props.resetFilters}>All transactions</Button>
          <Table bordered striped hover responsive>
            <thead>
            <tr>
              <th>data</th>
              <th className="text-right">wartość</th>
              <th className="text-right">kategoria</th>
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
                    <td className="text-right" style={ transaction.value > 0 ? {color: 'green'} : {color: 'red'}}>
                      { (transaction.value).toFixed(2) }
                    </td>
                    <td className="text-right">
                      { transaction.category }
                    </td>
                  </tr>
                )
              )
            }
            </tbody>
          </Table>
        </Grid>
      )
    }
  }
)