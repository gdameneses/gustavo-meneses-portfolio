import React from 'react';
import Container from 'react-bootstrap/Container';

import './Header.scss';

const Header = () => {
  return (
    <Container fluid className= "hero">
      <Container className="hero__content">
        <div className="hero__subtitle">
        <div className="hero__subtitle__block--left">
          <p className="hero__text">Hi, I am Gus</p>
          <p className="hero__text">Welcome to my portfolio</p>
        </div>
        <div className="hero__subtitle__block--right">
          <a href="https://github.com/gdameneses">My GitHub</a>
          <p>or</p>
          <a href="#about">About me</a>
        </div>
        </div>
          <div className="hero__header">
            <h1 className="hero__header__text--left">SOFTWARE</h1>
            <h1 className="hero__header__text--right">DEVELOPER</h1> 
          </div>
      </Container> 
    </Container>
  );
};

export default Header;
