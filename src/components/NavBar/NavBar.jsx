import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaChevronLeft } from "react-icons/fa";
import CartWidget from '../CartWidget/CartWidget';
import logo from '../img/logo_react.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import './NavBar.css'
import { NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" className="sticky-top">
        <Container>
            <div className='col-1'>
                <NavLink to='/' href="#home"><img src={logo} alt="logo" className="img-fluid w-100"/></NavLink> 
            </div>

            <div>
                <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto" id="navbarnav">
                            <NavLink to='/' id="navlink">Productos</NavLink>
                            <NavLink to='/dudas' id="navlink">Dudas</NavLink>
                            <NavLink to='/contacto' id="navlink">Contacto</NavLink>
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