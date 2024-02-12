import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.scss'

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid="md" className="navbar__container p-0">
        <Navbar.Brand href="#home" className="navbar__brand">Gustavo Meneses</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar__toggle" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar__links">
          <Nav>
            <Nav.Link href="#link" className="navbar__links__item">My projects</Nav.Link>
            <Nav.Link href="#home" className="navbar__links__item">About</Nav.Link>
            <Nav.Link href="#link" className="navbar__links__item">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;