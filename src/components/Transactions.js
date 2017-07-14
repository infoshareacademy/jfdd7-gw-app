import React from 'react'
import {connect} from 'react-redux'
import {Table, Button} from 'react-bootstrap'

import {fetchTransactions} from '../state/transactions'
import {activateIncomesFilter} from '../state/valuesFilters'

export default connect(
  state => ({
    transactions: state.transactions,
    activeFilterNames: state.valuesFilters.activeFilterNames
  }),

  dispatch => ({
    fetchTransactions: () => dispatch(fetchTransactions()),
    incomesFilter: () => dispatch(activateIncomesFilter())
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
          <Button
            onClick={this.props.incomesFilter}>
          </Button>
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
                transaction => this.props.activeFilterNames.includes('incomesOnly') ? transaction.value > 0 : true
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