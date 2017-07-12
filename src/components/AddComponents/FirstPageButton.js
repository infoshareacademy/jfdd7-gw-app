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

        <Button bsStyle="primary" bsSize="large" className="custom">Large button</Button>

      </div>

    )

  }


}