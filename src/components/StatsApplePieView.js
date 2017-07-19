import React from 'react'
import {Grid} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Doughnut} from 'react-chartjs'



export default connect(
  state => ({
    transactions: state.transactions.data
  })
)(
  class StatsApplePieView extends React.Component {


    render() {
      const transactions = this.props.transactions === null ? [{value: 10}, {value: 20}] : this.props.transactions
      const sumValuesOfOneCategory = category =>
        transactions.filter(
          transaction => transaction.category === category
        ).reduce(
          (total, next) => total + next.value,
          0
        ).toFixed(2)

      const totals = transactions.filter(transaction => transaction.value < 0
      ).map(
        transaction => transaction.category
      ).filter(
        (item, index, allItems) => allItems.indexOf(item) === index
      ).map(
        category => ({
          value: Math.abs(parseFloat(sumValuesOfOneCategory(category))),
          category: category,
          label: category
        })
      )
      return (

        <Grid>

          <Doughnut data={totals}/>

        </Grid>
      )
    }
  }
)