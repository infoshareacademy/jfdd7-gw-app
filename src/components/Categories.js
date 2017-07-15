import React from 'react'
import {connect} from 'react-redux'
import {fetchTransactions} from '../state/transactions'
import CategoryTransactions from './CategoryTransactions'
import {Button} from 'react-bootstrap'
import {activateFilter} from '../state/valuesFilters'

// import {} from 'react-bootstrap'


export default connect(
  state => ({
    transactions: state.transactions,
      activeFilterNames: state.valuesFilters.activeFilterNames
  }),
  dispatch => ({
      fetchTransactions: () => dispatch(fetchTransactions()),
      activateFilter: (name) => dispatch(activateFilter(name)),
  })
)(
  class Categories extends React.Component {

    componentWillMount() {
      this.props.fetchTransactions()
    }

    render() {
      const {data, fetching, error} = this.props.transactions

      return (
        <div className="Categories">
          <h1>KATEGORIE</h1>

          { error === null ? null : <p>{error.message}</p> }
          { fetching === false ? null : <p>Fetching data...</p>}


          {
            //this.props.students.data !== null && this.props.students.data.map(
            data !== null && data.map(
              transaction => transaction.category
            ).filter(
              (item, index, allItems) => allItems.indexOf(item) === index
            ).map(
              category => {
                const dataToDisplay = data.filter(transaction => transaction.category === category)
                  const buttons = [
                      {
                          label: category,
                          filterName: category+'_visible'
                      }
                  ]

                  return (
                  <div key={category}>
                      {
                          buttons.map(
                              button => (
                                  <Button
                                      key={button.filterName}
                                      onClick={() => this.props.activateFilter(button.filterName)}
                                      //active={this.props.activeFilterNames.includes(button.filterName)}
                                  >
                                      {button.label}
                                  </Button>
                              )
                          )
                      }
                    <CategoryTransactions
                      transactions={dataToDisplay}
                    />
                  </div>
                )
              }
            )
          }


        </div>
      )
    }
  })

