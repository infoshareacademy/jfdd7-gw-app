/**
 * Created by mateusztarsinski on 05.07.17.
 */
import React from 'react'

import { Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

export default class MainMenu extends React.Component {

  // linkClick() {
  //
  // }

  render() {
    return (
      <div className="MainMenu">
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="1" href="/home">Historia</NavItem>
          <NavItem eventKey="2" title="Item">Kategorie</NavItem>
          <NavItem eventKey="3" disabled>Analiza</NavItem>
          <NavItem eventKey="4" disabled>Skarbonka</NavItem>
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
