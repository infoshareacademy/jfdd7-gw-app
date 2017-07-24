import React from 'react'
import {FormControl, FormGroup, ControlLabel, Button, Grid} from 'react-bootstrap'
import {connect} from 'react-redux'

import {add} from '../state/transactions'

export default connect(
  state => ({}),
  dispatch => ({
    add: transaction => dispatch(add(transaction))
  })
)(
  class AddTransactionForm extends React.Component {

    state = {
      value: ''
    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.add(this.state)
    }

    render() {
      return (
        <Grid>
          <div>
            <form onSubmit={this.handleSubmit}>
              <FormGroup bsSize="large">
                <FormControl
                  type="text"
                  placeholder="Kwota"
                  value={this.state.value}
                  onChange={event => this.setState({value: event.target.value })}
                />
              </FormGroup>
              <FormGroup bsSize="large">
                <FormControl
                  type="text"
                  placeholder="Tytuł"
                />
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
              <Button type="submit" className='left col-xs-12 col-md-5' bsStyle="success">Dodaj wpis</Button>
            </form>


          </div>
        </Grid>
      )
    }
  }
)