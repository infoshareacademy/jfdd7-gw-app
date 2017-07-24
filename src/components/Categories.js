import React from 'react'
import {connect} from 'react-redux'
import {fetchTransactions} from '../state/transactions'
import CategoryTransactions from './CategoryTransactions'
import {Button, Grid, Row, Col, Well} from 'react-bootstrap'
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
              <Grid className="Categories">
                <div>
                  <Row>
                    <h1 className="text-center">KATEGORIE</h1>
                  </Row>
                  {/*<Row className="show-grid">*/}
                    {/*<Col xs={6} md={2}></Col>*/}
                    {/*<Col xs={12} md={8}>KATEGORIE</Col>*/}
                    {/*<Col xs={6} md={2}></Col>*/}
                  {/*</Row>*/}

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
                                        filterName: category + '_visible'
                                    }
                                ]

                                return (
                                    <div key={category}>
                                        {
                                            buttons.map(
                                                button => (
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
                                            )
                                        }np
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

