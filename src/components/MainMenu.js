/**
 * Created by mateusztarsinski on 05.07.17.
 */
import React from 'react'
import {Nav, NavItem, NavDropdown, Navbar} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

export default class MainMenu extends React.Component {

  // linkClick() {
  //
  // }

  render() {
    return (
      <div className="MainMenu">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav activeKey="1" onSelect={this.handleSelect}>
              <IndexLinkContainer to="/">
                <NavItem>Home</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/add-category">
                <NavItem>Dodaj kategorię</NavItem>
              </LinkContainer>
              <LinkContainer to="/transactions">
                <NavItem>Historia transakcji</NavItem>
              </LinkContainer>
              <LinkContainer to="/categories">
                <NavItem>Kategorie</NavItem>
              </LinkContainer>
              <LinkContainer to="/stats">
                <NavItem>Analiza</NavItem>
              </LinkContainer>
              <NavDropdown title="Więcej opcji" id="basic-nav-dropdown">
                  <LinkContainer to="/moneybox">
                    <NavItem>Skarbonka</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/add-transaction">
                    <NavItem>Dodaj transakcję</NavItem>
                  </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }
}
