import React from 'react'
import {Grid, Row, Col, Button, Glyphicon} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


export default class FirstPage extends React.Component {

  render() {
    return (
        <div>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4} lg={3}>
                <LinkContainer to="/categories" className="custom">
                  <Button bsStyle="warning" bsSize="large" >
                    Kategorie
                    <Glyphicon glyph="glyphicon glyphicon-list gi-5x" style={{display: 'block'}} />
                  </Button>
                </LinkContainer>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <LinkContainer to="/transactions" className="custom">
                  <Button bsStyle="danger" bsSize="large" >
                    Historia
                    <Glyphicon class="icons" glyph="glyphicon glyphicon-folder-open gi-5x" style={{display: 'block'}} />
                  </Button>
                </LinkContainer>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <LinkContainer to="/add-transaction" className="custom">
                  <Button bsStyle="info" bsSize="large">
                    Dodaj wpis
                    <Glyphicon glyph="glyphicon glyphicon-plus-sign gi-5x" style={{display: 'block'}} />
                  </Button>
                </LinkContainer>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <LinkContainer to="/stats" className="custom">
                  <Button bsStyle="info" bsSize="large" >
                    Statystyki
                    <Glyphicon glyph="glyphicon glyphicon-signal gi-5x" style={{display: 'block'}} />
                  </Button>
                </LinkContainer>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <LinkContainer to="/login" className="login">
                  <Button bsStyle="primary" bsSize="large" >Login</Button>
                </LinkContainer>
              </Col>
            </Row>
          </Grid>
        </div>
    )
  }
}
