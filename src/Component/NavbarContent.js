import React from 'react';
import './style/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/firstlogo.jpg';
function NavbarContent() {
    return (
        <>
            <div className='all-navbar-area'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container  >                                           {/* Nabvbar logo logo start */}
                        <div className='logos'>
                            <img src={logo} alt='logo' />
                        </div>
                        <Navbar.Brand href="#home">StartupLanding</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="me-auto">
                                <Nav.Link active href="#home">Home</Nav.Link>
                                <NavDropdown active title="Adversite" id="basic-nav-dropdown">
                                    <NavDropdown.Item active href="#action/3.1">Adversite</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown active title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item active href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link active href="#contact us">Contact</Nav.Link>
                                <Nav.Link active href="#about us">About Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>                                                   {/* Navabr Ragister area */}
                        <div className='button-f'>
                            <a href='#'> <button type='submit'>  Ragister Now</button></a>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};
export default NavbarContent;
