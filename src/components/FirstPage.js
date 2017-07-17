import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


export default class FirstPage extends React.Component {

  render() {
    return (
        <div>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4} lg={3}>
                <LinkContainer to="/categories" className="custom">
                  <Button bsStyle="primary" bsSize="large" >Kategorie</Button>
                </LinkContainer>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <LinkContainer to="/transactions" className="custom">
                  <Button bsStyle="primary" bsSize="large" >Historia</Button>
                </LinkContainer>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <LinkContainer to="/add-transaction" className="custom">
                  <Button bsStyle="primary" bsSize="large">Dodaj wpis</Button>
                </LinkContainer>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <LinkContainer to="/stats" className="custom">
                  <Button bsStyle="primary" bsSize="large" >Statystyki</Button>
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
