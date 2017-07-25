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
      uid: this.props.uid || null,
      content: this.props.content || ''
    }

    handleSubmit = event => {
      const { uid, content } = this.state

      event.preventDefault()

      if (uid === null) {
        this.props.createPost({ content })
        this.setState({ content: '' })
      } else {
        this.props.updatePost(uid, { content })
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
                  value={this.state.content}
                  onChange={event => this.setState({
                    content: event.target.value
                  })}
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