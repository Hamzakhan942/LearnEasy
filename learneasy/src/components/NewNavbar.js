import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from '../static/logo-4.png'


const links = [
  { href: '/', text: 'Home' },
  { href: '/aboutus', text: 'About Us' },
  { href: '/takequiz', text: 'Take a Quiz' },
  { href: '/contactus', text: 'Contact Us' },
  { href: '/login', text: 'LOGIN' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}><h6>{text}</h6></NavLink>
  </NavItem>
);

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar style={{background: '#EEEEEE'}} light expand="md">
          <NavbarBrand href="/"><h3> <img src={logo} alt="Logo" width="60" height="60" style={{margin: '0px 20px'}}/>Learn Easy</h3> </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}