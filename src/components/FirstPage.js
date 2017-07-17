import React from 'react'
// import FirstPageButton from './AddComponents/FirstPageButton'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Categories from './Categories'
// import AddTransaction from './AddTransaction'
// import Transactions from './Transactions'
// import Stats from './Stats'
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
            {/*</Row>*/}
            {/*<Row className="show-grid">*/}
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
            </Row>
          </Grid>
        </div>
    )
  }
}
