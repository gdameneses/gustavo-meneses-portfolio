import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.scss';

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className="navbar">
      <div id="background" className={`${scrollPosition > 16 ? 'navbar__background--active' : 'navbar__background'}`}></div>
      <Container fluid="md" className="navbar__container">
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
