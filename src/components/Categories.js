/**
 * Created by mateusztarsinski on 05.07.17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {fetchTransactions} from '../state/transactions'

// import {} from 'react-bootstrap'


export default connect(
  state => ({
    transactions: state.transactions
  }),
  dispatch => ({
    fetchTransactions: () => dispatch(fetchTransactions())
  })
)(
  class Categories extends React.Component {

    componentWillMount() {
      this.props.fetchTransactions()
    }

    render() {
      const { data, fetching, error } = this.props.transactions
      return (
        <div className="Categories">
          <h1>KATEGORIE</h1>

          { error === null ? null : <p>{error.message}</p> }
          { fetching === false ? null : <p>Fetching data...</p>}

          <h2>Kategoria</h2>
          <h2>Kategoria</h2>
          <h2>Kategoria</h2>

          <h3>dodaj kategorie</h3>
        </div>
      )
    }
  })

