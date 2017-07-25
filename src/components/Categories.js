import React from 'react'
import {connect} from 'react-redux'
import {fetchTransactions} from '../state/transactions'
import CategoryTransactions from './CategoryTransactions'
import {Button, Grid, Row, Col, Well} from 'react-bootstrap'
import {activateFilter} from '../state/valuesFilters'
// import {} from 'react-bootstrap'


export default connect(
    state => ({
        transactions: state.posts,
        activeFilterNames: state.valuesFilters.activeFilterNames
    }),
    dispatch => ({
        fetchTransactions: () => dispatch(fetchTransactions()),
        activateFilter: (name) => dispatch(activateFilter(name)),
        resetFilters: () => dispatch({ type: 'RESET' })
    })
)(
    class Categories extends React.Component {

        componentWillMount() {
            this.props.fetchTransactions()
        }

        render() {
            const {data} = this.props.transactions

            return (
              <Grid className="Categories">
                <div>
                  <Row>
                    <h1 className="text-center">KATEGORIE</h1>
                  </Row>

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
                                        filterName: category + '_visible'
                                    }
                                ]

                                return (
                                    <div key={category}>
                                        {
                                            buttons.map(
                                                button => {
                                                  console.log(dataToDisplay)
                                                  return (
                                                    <Row>

                                                      <Button block
                                                              bsStyle="warning"
                                                              key={button.filterName}
                                                              onClick={() => this.props.activateFilter(button.filterName)}
                                                              active={this.props.activeFilterNames.includes(button.filterName)}
                                                      >
                                                        {(button.label).toUpperCase() }
                                                      </Button>


                                                      {this.props.activeFilterNames.includes(button.filterName)?
                                                        <CategoryTransactions transactions={dataToDisplay} /> : null}

                                                    </Row>
                                                  )
                                                }
                                            )
                                        }
                                    </div>
                                )
                            }
                        )
                    }


                </div>
              </Grid>
            )
        }
    })

