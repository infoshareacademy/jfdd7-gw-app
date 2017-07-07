import React from 'react'
import {FormControl, FormGroup} from 'react-bootstrap'


export default class AddTransactionForm extends React.Component {

  render () {
    return (
      <form>
        <FormGroup bsSize="large">
          <FormControl type="text" placeholder="Large text" />
        </FormGroup>
      </form>
    )
  }
}