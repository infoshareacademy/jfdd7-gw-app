import React from 'react'
import {FormControl, FormGroup, InputGroup, DropdownButton, MenuItem} from 'react-bootstrap'


export default class AddTransactionForm extends React.Component {

  render () {
    return (
      <form>
        <FormGroup bsSize="large">
          <FormControl type="text" placeholder="Kwota" />
        </FormGroup>
        <FormGroup bsSize="large">
          <FormControl type="text" placeholder="Tytuł" />
        </FormGroup>
        <FormGroup bsSize="large">
          <FormControl type="text" placeholder="Kategoria" />
        </FormGroup>

      </form>
    )
  }
}