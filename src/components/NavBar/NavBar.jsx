import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaChevronLeft } from "react-icons/fa";
import CartWidget from '../CartWidget/CartWidget';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import './NavBar.css'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" className="sticky-top">
        <Container>
            <div className='col-1'>
                <NavLink to='/'>
                    <img src="/img/logo_react.png" alt="logo" className="img-fluid w-100"/>
                </NavLink> 
            </div>

            <div>
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="me-auto" id="navbarnav">
                        <NavLink to='/home' id="navlink">Home</NavLink>
                        <NavLink to='/category/ss23' id="navlink">SS23</NavLink>
                        <NavLink to='/questions' id="navlink">Dudas</NavLink>
                    </Nav>
                </NavbarCollapse>
            </div>

            <div id="icons">
                <CartWidget/>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbarToggle"><FaChevronLeft id="iconMenu"/></Navbar.Toggle>
            </div>
        </Container>
  </Navbar>
  )
}

export default NavBar