import React from 'react'
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'


export default class AddTransactionForm extends React.Component {

  render () {
    return (
      <div>
      <form>
        <FormGroup bsSize="large">
          <FormControl type="text" placeholder="Kwota" />
        </FormGroup>
        <FormGroup bsSize="large">
          <FormControl type="text" placeholder="Tytuł" />
        </FormGroup>
        <FormGroup controlId="formControlsSelectMultiple">
          <ControlLabel>Kategoria</ControlLabel>
          <FormControl componentClass="select" multiple>
            <option value="select">select (multiple)</option>
            <option value="other">dom</option>
            <option value="other">pies</option>
            <option value="other">alko</option>
            <option value="other">waha</option>
          </FormControl>
        </FormGroup>
      </form>
        </div>
    )
  }
}