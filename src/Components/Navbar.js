import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

function NavBar(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                
                </Nav>
                <Nav>
                    <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://videosync.co/" target="blank">Video Sync</NavDropdown.Item>
                        <NavDropdown.Item href="https://cnn.com/" target="blank">CNN</NavDropdown.Item>
                        <NavDropdown.Item href="https://google.com/" target="blank">Google</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;