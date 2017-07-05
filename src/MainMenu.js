/**
 * Created by mateusztarsinski on 05.07.17.
 */
import React from 'react'

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

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
              <a href="#">Aplikacja Budżetowa</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#"
            // onClick={this.linkClick}
            >Kategorie</NavItem>
            <NavItem eventKey={2} href="#">Historia</NavItem>
            <NavItem eventKey={3} href="#">Coś</NavItem>
            {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">*/}
              {/*<MenuItem eventKey={3.1}>Action</MenuItem>*/}
              {/*<MenuItem eventKey={3.2}>Another action</MenuItem>*/}
              {/*<MenuItem eventKey={3.3}>Something else here</MenuItem>*/}
              {/*<MenuItem divider />*/}
              {/*<MenuItem eventKey={3.4}>Separated link</MenuItem>*/}
            {/*</NavDropdown>*/}
          </Nav>
        </Navbar>
      </div>
    )
  }
}
