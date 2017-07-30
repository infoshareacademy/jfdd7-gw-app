import React from 'react'
import AddTransactionForm from './AddTransactionForm'
import Transactions from './Transactions'

export default class AddTransaction extends React.Component {
  render() {
    return (
      <div>
        <AddTransactionForm/>
        <Transactions limit={10} disp={true}/>
      </div>
    )
  }
}