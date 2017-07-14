import React from 'react'
import FirstPageButton from './AddComponents/FirstPageButton'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Categories from './Categories'
import AddTransaction from './AddTransaction'
import Transactions from './Transactions'
import Stats from './Stats'
import {Grid, Row, Col, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default class FirstPage extends React.Component {

  render() {
    return (
      <Router>
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}><LinkContainer to="/categories">
              <NavItem><FirstPageButton/></NavItem>
            </LinkContainer></Col>
            <Col xs={6} md={4}><FirstPageButton/></Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} md={4}><FirstPageButton/></Col>
            <Col xs={6} md={4}><FirstPageButton/></Col>
          </Row>



          <Route path="/categories" component={Categories}/>
          <Route path="/add-transaction" component={AddTransaction}/>
          <Route exact path="/transactions" component={Transactions}/>
          <Route exact path="/stats" component={Stats}/>



        </Grid>
      </div>
      </Router>
    )
  }
}
