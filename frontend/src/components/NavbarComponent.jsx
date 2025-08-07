import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard">SmartTracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="budget-navbar-nav" />
        <Navbar.Collapse id="budget-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/income">Income</Nav.Link>
            <Nav.Link as={Link} to="/expenses">Expenses</Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown title="User" id="user-nav-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
