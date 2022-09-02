import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';
import { LinkContainer } from "react-router-bootstrap";

export const NavbarComp = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">OlymFit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link>Inicio</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <LinkContainer to="/categoria/camisetas">
                                <NavDropdown.Item >Camisetas</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/categoria/camperas">
                                <NavDropdown.Item >Camperas</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/categoria/accesorios">
                                <NavDropdown.Item >Accesorios</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/nosotros">
                            <Nav.Link>Nosotros</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contacto">
                            <Nav.Link>Contacto</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <div className="container-cart">
                    <CartWidget />
                </div>
            </Container>
        </Navbar>
    )
}