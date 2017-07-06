import React from 'react'
import {Button} from 'react-bootstrap'
import './AddTransactionButtons.css'

export default class AddTransactionButtons extends React.Component {

  render() {
    return (

<div className='container'>
        <div className="row">
        {/*<i class="fa fa-plus-square" aria-hidden="true"></i>*/}
        <Button className='left col-xs-12 col-md-5' bsStyle="success">Zapisz i dodaj następny wpis</Button>
        <Button className='right col-xs-12 col-md-5' bsStyle="success">Zapisz i opuść formularz</Button>
        </div>
</div>

    )

  }



}