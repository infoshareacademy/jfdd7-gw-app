/**
 * Created by mateusztarsinski on 05.07.17.
 */
import React from 'react'
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

export default class MainMenu extends React.Component {

  // linkClick() {
  //
  // }

  render() {
    return (
      <div className="MainMenu">
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/add-category">
            <NavItem>Dodaj kategorię</NavItem>
          </LinkContainer>
          <LinkContainer to="/history">
            <NavItem>Historia</NavItem>
          </LinkContainer>
          <LinkContainer to="/categories">
            <NavItem>Kategorie</NavItem>
          </LinkContainer>
          <LinkContainer to="/analysis">
            <NavItem>Analiza</NavItem>
          </LinkContainer>
          <LinkContainer to="/moneybox">
            <NavItem>Skarbonka</NavItem>
          </LinkContainer>

          {/*<NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">*/}
          {/*<MenuItem eventKey="4.1">Action</MenuItem>*/}
          {/*<MenuItem eventKey="4.2">Another action</MenuItem>*/}
          {/*<MenuItem eventKey="4.3">Something else here</MenuItem>*/}
          {/*<MenuItem divider />*/}
          {/*<MenuItem eventKey="4.4">Separated link</MenuItem>*/}
          {/*</NavDropdown>*/}
        </Nav>
      </div>
    )
  }
}
