import React from 'react'
import {FormControl, FormGroup, ControlLabel, Button, Grid} from 'react-bootstrap'
import {connect} from 'react-redux'

import {updateTransaction, createTransaction} from '../state/posts'

//import {add} from '../state/transactions'


class AddTransactionForm extends React.Component {

  state = {
    uid: this.props.uid || null,
    date: this.props.date || '',
    value: this.props.value || '',
    title: this.props.title || '',
    category: this.props.category || ''
  }

  handleSubmit = event => {
    const {uid, date, value, title, category} = this.state

    event.preventDefault()

    if (uid === null) {
      this.props.createTransaction({date, value, title, category})
      this.setState({
        date: '',
        value: '',
        title: '',
        category: ''
      })
    } else {
      this.props.updateTransaction(uid, {date, value, title, category})
    }
  }

  render() {
    return (
      <Grid>
        <div>
          <form onSubmit={this.handleSubmit}>
            <FormGroup bsSize="large">
              <FormControl
                type="date"
                placeholder="Data"
                value={this.state.date}
                onChange={event => this.setState({
                  date: event.target.value
                })}
              />
            </FormGroup>
            <FormGroup bsSize="large">
              <FormControl
                type="text"
                placeholder="Kwota"
                value={this.state.value}
                onChange={event => this.setState({
                  value: event.target.value
                })}
              ></FormControl>
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
              <FormControl
              type="text"
              placeholder="Kategoria"
              value={this.state.category}
              onChange={event => this.setState({
                category: event.target.value
              })}
              />

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