import React from 'react'

import {Grid, Row, Col} from 'react-bootstrap'

export default class FirstPage extends React.Component {

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}><code>&lt;{'Historia - ostatnie wpisy'} /&gt;</code></Col>
            <Col xs={12} md={6}><code>&lt;{'Kategorie'} /&gt;</code></Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6}><code>&lt;{'Analiza'} /&gt;</code></Col>
            <Col xs={12} md={6}><code>&lt;{'Skarbonka'} /&gt;</code></Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}><code>&lt;{'Dodaj wpis'} /&gt;</code></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
