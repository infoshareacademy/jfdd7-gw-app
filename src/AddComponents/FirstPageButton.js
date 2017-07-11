/**
 * Created by tomaszmoroz on 11.07.17.
 */
import React from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import './FirstPageButton.css'

export default class FirstPageButton extends React.Component {

  render() {
    return (

      <div className='tile'>
         <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" class="frontClass">Large button</Button>

          </ButtonToolbar>
      </div>

    )

  }



}