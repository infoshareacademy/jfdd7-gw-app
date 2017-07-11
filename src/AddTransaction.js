import React from 'react'
import AddTransactionButtons from './AddTransactionComponents/AddTransactionButtons'
import AddTransactionForm from './AddTransactionComponents/AddTransactionForm'


export default class AddTransaction extends React.Component {
  render() {
    return (
      <div>
        <AddTransactionForm/>
        <AddTransactionButtons/>
      </div>
    )
  }
}