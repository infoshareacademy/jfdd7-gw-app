/**
 * Created by mateusztarsinski on 05.07.17.
 */
import React from 'react'
import {Nav, NavItem, Navbar} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import firebase from 'firebase'

import image from '../pictures/logo2.png'

export default class MainMenu extends React.Component {



  render() {
    return (
      <div className="MainMenu">
        <Navbar className="navbar-danger">
          <Navbar.Header >
            <Navbar.Brand >
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
              <LinkContainer to="/stats">
                <NavItem>Statystyki</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <NavItem
                      onClick={() => firebase.auth().signOut()}>
                Wyloguj
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }
}
