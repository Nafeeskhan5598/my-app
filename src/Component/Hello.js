import React from 'react';
import './style/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Hello() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container >
                    <div className='logos'>
                        <img src='images.svg' alt='logo' />
                    </div>
                    <Navbar.Brand href="#home">StartupLanding</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>

                            <NavDropdown title="Adversite" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Adversite</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>


                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="#contact us">Contact</Nav.Link>
                            <Nav.Link href="#about us">About Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                    <div className='btn'>
                        <button type='submit'>Ragister Now</button>
                    </div>
                </Container>
            </Navbar>

        </>
    );
};
export default Hello;