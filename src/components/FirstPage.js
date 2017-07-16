import React from 'react'
import FirstPageButton from './AddComponents/FirstPageButton'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Categories from './Categories'
import AddTransaction from './AddTransaction'
import Transactions from './Transactions'
import Stats from './Stats'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


export default class FirstPage extends React.Component {

  render() {
    return (
        <div>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <LinkContainer to="/categories">
                  <Button bsStyle="primary" bsSize="large" className="custom">Kategorie</Button>
                </LinkContainer>
              </Col>
              <Col xs={6} md={4}>
                <LinkContainer to="/transactions">
                  <Button bsStyle="primary" bsSize="large" className="custom">Historia</Button>
                </LinkContainer>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <LinkContainer to="/add-transaction">
                  <Button bsStyle="primary" bsSize="large" className="custom">Dodaj wpis</Button>
                </LinkContainer>
              </Col>
              <Col xs={6} md={4}>
                <LinkContainer to="/stats">
                  <Button bsStyle="primary" bsSize="large" className="custom">Statystyki</Button>
                </LinkContainer>
              </Col>
            </Row>
          </Grid>
        </div>
    )
  }
}
