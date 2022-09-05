import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../../assets/images/logo.png";

export const NavbarComp = () => {
    return(
        <Navbar className='navbar-container' expand="lg">
            <Container>
                <LinkContainer to="/" className="logo-container">
                    <Navbar.Brand><img src={Logo} alt="Logo" className='logo'/></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center navbar-collapse">
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link className="navbar-link fs-4 me-5">Inicio</Nav.Link>
                        </LinkContainer>
                        <div class="navbar-link fs-4 me-5">
                            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                <LinkContainer to="/categoria/camisetas">
                                    <NavDropdown.Item className="fs-5 dropdown-item">Camisetas</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categoria/camperas">
                                    <NavDropdown.Item className="fs-5 dropdown-item">Camperas</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categoria/accesorios">
                                    <NavDropdown.Item className="fs-5 dropdown-item">Accesorios</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </div>
                        <LinkContainer to="/nosotros">
                            <Nav.Link className="navbar-link fs-4 me-5">Nosotros</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contacto">
                            <Nav.Link className="navbar-link fs-4 me-5">Contacto</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <div className="cart-container">
                                <CartWidget />
                            </div>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}