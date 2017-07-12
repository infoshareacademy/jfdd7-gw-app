/**
 * Created by mateusztarsinski on 06.07.17.
 */
import React from 'react'

import {ControlLabel, Col, FormControl, FormGroup, Radio, Button, Form} from 'react-bootstrap'

export default class AddCategory extends React.Component {

  render() {
    return (
<div className="AddCategory">
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Kategoria
      </Col>
      <Col sm={12}>
        <FormControl type="text" placeholder="Wpisz nową kategorię" />
      </Col>
    </FormGroup>

    <FormGroup>

      <Radio name="radioGroup" inline>
        koszt
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
        przychód
      </Radio>
    </FormGroup>



    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Dodaj
        </Button>
      </Col>
    </FormGroup>
  </Form>
</div>
    )
  }
}