import React from 'react'
import AddTransactionButtons from './AddTransactionComponents/AddTransactionButtons'
import AddTransactionForm from './AddTransactionComponents/AddTransactionForm'
import TableData from './TableData'

export default class AddTransaction extends React.Component {
  render() {
    return (
      <div>
        <AddTransactionForm/>
        <AddTransactionButtons/>
        <TableData/>
      </div>
    )
  }
}