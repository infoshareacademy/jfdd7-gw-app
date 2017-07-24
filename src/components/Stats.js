import React from 'react'
import {connect} from 'react-redux'
import {BarChart, XAxis, YAxis, Bar, ResponsiveContainer} from 'recharts'
import {Grid} from 'react-bootstrap'
import StatsApplePieView from './StatsApplePieView'


export default connect(
  state => ({
    transactions: state.transactions.data
  })
)(
  class Stats extends React.Component {



//filtrem po kategoriach i reduce dla kazdej kat.
    render() {
      const transactions = this.props.transactions === null ? [] : this.props.transactions
      const sumValuesOfOneCategory = category =>
        transactions.filter(
          transaction => transaction.category === category
        ).reduce(
          (total, next) => total + next.value,
          0
        ).toFixed(2)

      const totals = transactions.map(
        transaction => transaction.category
      ).filter(
        (item, index, allItems) => allItems.indexOf(item) === index
      ).map(
        category => ({
          value: parseFloat(sumValuesOfOneCategory(category)),
          category: category
        })
      )
      return (
        <Grid>
          <div className="hidden-xs">
            <h2 style={{textAlign: 'center'}}>Bilans wydatków i wpływów</h2>

            <ResponsiveContainer height={300}>
              <BarChart data={totals}>
                <XAxis dataKey="category"/>
                <YAxis />
                <Bar type="monotone" dataKey="value" barSize={30} fill="#8884d8"
                     label=""/>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <h2 style={{textAlign: 'center'}}>Wydatki</h2>
          <StatsApplePieView/>
        </Grid>
      )
    }
  }
)
