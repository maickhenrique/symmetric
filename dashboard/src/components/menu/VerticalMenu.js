import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import '../style.css';

const HorizontalMenu  = () => {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <h1 className='logo'>Symmetric</h1>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/login" activeClassName="active">Entrar</NavLink>
            <NavLink className="nav-link" to="/cadastro" activeClassName="active">Cadastrar</NavLink>
            <NavLink className="nav-link" to="/header-bidding" activeClassName="active">Header Bidding</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HorizontalMenu ;
