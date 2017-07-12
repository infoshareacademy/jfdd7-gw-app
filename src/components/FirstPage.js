import React from 'react'
import FirstPageButton from './AddComponents/FirstPageButton'

import {Grid, Row, Col} from 'react-bootstrap'

export default class FirstPage extends React.Component {

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}><FirstPageButton/></Col>
            <Col xs={6} md={4}><FirstPageButton/></Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} md={4}><FirstPageButton/></Col>
            <Col xs={6} md={4}><FirstPageButton/></Col>
          </Row>

        </Grid>
      </div>
    )
  }
}
