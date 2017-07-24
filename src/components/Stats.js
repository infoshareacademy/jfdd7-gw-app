import React from 'react'
import {connect} from 'react-redux'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {fetchTransactions} from '../state/transactions'
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
      const CharLabel = React.createClass({
          render () {
            const {x, y, stroke, value} = this.props;
            return <text x={x} y={y} dx={-5} fill={stroke} fontSize={10} textAnchor="end">{value}</text>
          }
        }
      )
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
          <ResponsiveContainer height={400}>
            <BarChart data={totals}>
              <XAxis dataKey="category"/>
              <YAxis />
              <Bar type="monotone" dataKey="value" barSize={30} fill="#8884d8"
                   label=""/>
            </BarChart>
          </ResponsiveContainer>
          </div>
          <StatsApplePieView/>
        </Grid>
      )
    }
  }
)
