import React from 'react'
import AddTransactionButtons from './AddComponents/AddTransactionButtons'
import AddTransactionForm from './AddComponents/AddTransactionForm'


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