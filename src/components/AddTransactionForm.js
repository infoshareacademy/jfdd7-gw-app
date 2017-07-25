import React from 'react'
import {FormControl, FormGroup, ControlLabel, Button, Grid} from 'react-bootstrap'
import {connect} from 'react-redux'

import {updateTransaction, createTransaction} from '../state/posts'

//import {add} from '../state/transactions'


class AddTransactionForm extends React.Component {

  state = {
    uid: this.props.uid || null,
    value: this.props.value || '',
    title: this.props.title || ''
  }

  handleSubmit = event => {
    const {uid, value, title} = this.state

    event.preventDefault()

    if (uid === null) {
      this.props.createTransaction({value, title})
      this.setState({
        value: '',
        title: ''
      })
    } else {
      this.props.updateTransaction(uid, {value, title})
    }
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
                onChange={event => this.setState({
                  value: event.target.value
                })}
              />
            </FormGroup>
            <FormGroup bsSize="large">
              <FormControl
                type="text"
                placeholder="Tytuł"
                value={this.state.title}
                onChange={event => this.setState({
                  title: event.target.value
                })}
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

export default connect(
  null,
  dispatch => ({
    createTransaction: data => dispatch(createTransaction(data)),
    updateTransaction: (uid, data) => dispatch(updateTransaction(uid, data))
  })
)(AddTransactionForm)