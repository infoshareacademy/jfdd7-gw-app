import React from 'react'
import {connect} from 'react-redux'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {fetchTransactions} from '../state/transactions'
import { BarChart, XAxis, YAxis, Bar,  ResponsiveContainer } from 'recharts'


export default connect(
  state => ({
    transactions: state.transactions.data
  }),
  dispatch => ({
    fetchTransactions: () => dispatch(fetchTransactions())

  })
)(
  class Stats extends React.Component {

    componentWillMount() {
      this.props.fetchTransactions()

    }

//filtrem po kategoriach i reduce dla kazdej kat.
    render() {
      const transactions = this.props.transactions === null ? [] : this.props.transactions
      const sumValuesOfOneCategory = (category) => transactions.filter(transaction => transaction.category == category).reduce((total, next) => total + next.value, 0)
      if (this.props.transactions !== null) console.log('sss', sumValuesOfOneCategory('transport'))
      return (
        <div>Tu możesz podejrzeć swoje statystyki
          <ResponsiveContainer height={500}>
            <BarChart data={transactions}>
              <XAxis dataKey="value" tick={() => <p>lolo</p>} />
              <YAxis />
              <Bar type="monotone" dataKey="value" barSize={30} fill="#8884d8"
                   label={() => <p> lololo </p>}/>
            </BarChart>
          </ResponsiveContainer>
          <ListGroup>
            {
              transactions.map(
                transaction => (
                  <ListGroupItem key={transaction.id}>{transaction.category}</ListGroupItem>
                )
              )
            }
          </ListGroup>


        </div>
      )
    }


  }
)