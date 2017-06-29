import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Navbar, Nav, MenuItem, NavItem, ButtonGroup } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div>
      <Navbar className='navbar' inverse fixedTop>
       <Navbar.Header>
         <Navbar.Brand>
            <i className="fa fa-instagram" aria-hidden="true"></i>
           <a className='brand' href="/"> <span id='brand-text'>VARUNREDUX: FINANCIAL-ANALTYICS </span> </a>
         </Navbar.Brand>
         <Navbar.Toggle />
       </Navbar.Header>
       <Navbar.Collapse>

         <Nav pullRight>
           <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl className='searchBar' type="text" placeholder="Search" />
     </FormGroup>


    </Navbar.Form>
         </Nav>

       </Navbar.Collapse>
     </Navbar>
     <Navbar className='bottom-navbar' inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
           <i className="fa fa-instagram" aria-hidden="true"></i>
          <a className='brand' href="/"> <span id='brand-text'>VARUNREDUX </span> </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className='insta-categories'>
        <NavItem className='category' eventKey={1} href="#">Crypto</NavItem>
        <NavItem className='category' eventKey={2} href="#">Oil</NavItem>
        <NavItem className='category' eventKey={2} href="#">Stocks</NavItem>
        <NavItem className='category' eventKey={2} href="#">S&P</NavItem>
        <NavItem className='category' eventKey={2} href="#">FTSE100</NavItem>
        <NavItem className='category' eventKey={2} href="#">BONDS</NavItem>

     </Nav>

      </Navbar.Collapse>
    </Navbar>



   </div>


    )
  }

}
