import React from 'react'
import AddTransactionForm from './AddTransactionForm'
import TableData from './TableData'

export default class AddTransaction extends React.Component {
  render() {
    return (
      <div>
        <AddTransactionForm/>

        <TableData/>
      </div>
    )
  }
}