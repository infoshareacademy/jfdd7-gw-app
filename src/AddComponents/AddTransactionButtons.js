import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'

export default class AddTransactionButtons extends React.Component {

  render() {
    return(

      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Large button</Button>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>

        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Large button</Button>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>

      </div>

    )

  }



}