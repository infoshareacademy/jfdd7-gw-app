import React from 'react'
import {connect} from 'react-redux'
import { deleteTransaction } from '../state/posts'
import {Table, Button, Grid} from 'react-bootstrap'



import {fetchTransactions} from '../state/transactions'
import {activateFilter} from '../state/valuesFilters'

export default connect(
  state => ({
    transactions: state.posts,
    activeFilterNames: state.valuesFilters.activeFilterNames
  }),

  dispatch => ({
    handleDeleteTransactionClick: event => dispatch(deleteTransaction(event.target.dataset.uid)),
    fetchTransactions: () => dispatch(fetchTransactions()),
    activateFilter: (name) => dispatch(activateFilter(name)),
    resetFilters: () => dispatch({ type: 'RESET' })
  })
)(
  class Transactions extends React.Component {

    state = {
      summaryEnabled: false
    }

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
          label: 'Przychody',
          filterName: 'value_incomes',
          style: 'success'
        },
        {
          label: 'Wydatki',
          filterName: 'value_outcomes',
          style: 'danger'
        },

      ]

      return (
        <Grid>
          <Button
            className={this.props.resetFilters}


              onClick={event => {
                event.preventDefault()
                this.setState({
                  summaryEnabled: !this.state.summaryEnabled
                })

              }}

            >
                Nuke button

          </Button>

          {
            this.state.summaryEnabled === true ?
              <p>Bilansik</p> :
              <div>
                <ul className="nav nav-tabs">
                  {
                    buttons.map(
                      button => (
                        <li
                          key={button.filterName}
                          className={this.props.activeFilterNames.includes(button.filterName) ? 'active' : null}
                        >
                          <a
                            onClick={event => {
                              event.preventDefault()
                              this.props.activateFilter(button.filterName)
                            }}
                          >
                            <span className={button.filterName === 'value_outcomes'? 'glyphicon glyphicon-minus' : 'glyphicon glyphicon-plus' }></span> {button.label}
                          </a>
                        </li>
                      )
                    )
                  }
                  <li
                    className={this.props.resetFilters}
                  >
                    <a
                      onClick={event => {
                        event.preventDefault()
                        this.props.resetFilters()

                      }}

                    >
                      <span className="glyphicon glyphicon-piggy-bank"></span>    Wszystkie wpisy
                    </a>

                  </li>

                </ul>
              <Table bordered striped hover responsive>
                <thead>
                <tr>
                  <th>data</th>
                  <th className="text-right">wartość</th>
                  <th className="text-right">tytuł</th>
                  <th className="text-right">kategoria</th>
                  <th>Usuń</th>
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
                  ).sort((a, b) => (new Date(b.date)) - (new Date(a.date))).slice(0, this.props.limit).map(
                    transaction => (
                      <tr key={transaction.id}>
                        <td>
                          { transaction.date }
                        </td>
                        <td className="text-right" style={ transaction.value > 0 ? {color: 'green'} : {color: 'red'}}>
                          { (transaction.value) }
                        </td>
                        <td className="text-right">
                          { transaction.title }
                        </td>
                        <td className="text-right">
                          { transaction.category }
                        </td>
                        <td>
                          <button data-uid={transaction.uid} onClick={this.props.handleDeleteTransactionClick}>
                            Usuń
                          </button>
                        </td>
                      </tr>
                    )
                  )
                }
                </tbody>
              </Table>
              </div>
          }

        </Grid>

      )
    }
  }
)