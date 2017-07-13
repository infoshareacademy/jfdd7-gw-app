import React from 'react'
import {connect} from 'react-redux'


export default connect(
  state => ({
     transactions: state.transactions.data
    }),
  dispatch => ({

  })
)(
  class Stats extends React.Component {

    componentWillMount() {

    }


    render() {
const dataTrasactions = this.props.transactions === null ? [] : this.props.transactions
      return (
        <div>Tu możesz podejrzeć swoje statystyki</div>
      )
    }


  }
)