/**
 * Created by mateusztarsinski on 05.07.17.
 */
import React from 'react'
import {Nav, NavItem, NavDropdown, Navbar} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

import image from '../pictures/logo.png'

export default class MainMenu extends React.Component {



  render() {
    return (
      <div className="MainMenu">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={image} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav activeKey="1" onSelect={this.handleSelect}>
              <IndexLinkContainer to="/">
                <NavItem>Home</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/add-transaction">
                <NavItem>Dodaj transakcję</NavItem>
              </LinkContainer>
              <LinkContainer to="/transactions">
                <NavItem>Historia transakcji</NavItem>
              </LinkContainer>
              <LinkContainer to="/categories">
                <NavItem>Kategorie</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Statystyki" id="basic-nav-dropdown">
                <LinkContainer to="/stats">
                  <NavItem>Wykres</NavItem>
                </LinkContainer>
                <LinkContainer to="/statsApplePieView">
                  <NavItem>ApplePie :)</NavItem>
                </LinkContainer>
                <LinkContainer to="/calendar">
                  <NavItem>Kalendarz</NavItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }
}
