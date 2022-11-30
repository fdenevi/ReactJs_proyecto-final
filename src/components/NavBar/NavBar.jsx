import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaChevronLeft } from "react-icons/fa";
import CartWidget from '../CartWidget/CartWidget';
import logo from '../img/logo_react.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import './NavBar.css'



const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar">
        <Container>
            <div className='col-1'>
                <a href="#home"><img src={logo} alt="logo" className="img-fluid w-100"/></a>   
            </div>

            <div>
                <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto" id="navbarnav">
                            <Nav.Link href="#productos" id="navlink">Productos</Nav.Link>
                            <Nav.Link href="#dudas" id="navlink">Dudas</Nav.Link>
                            <Nav.Link href="#contacto" id="navlink">Contacto</Nav.Link>
                        </Nav>
                </NavbarCollapse>
            </div>

            <div id="icons">
                < CartWidget/>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbarToggle"><FaChevronLeft id="iconMenu"/></Navbar.Toggle>
            </div>
        </Container>
  </Navbar>
  )
}

export default NavBar