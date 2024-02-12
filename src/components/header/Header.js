import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import './Header.scss';

const Header = () => {
  return (
    <Container fluid className= "hero p-0">
      <Container fluid="md" className="hero__content p-0">
        <div className="hero__subtitle">
          <div className="hero__subtitle__block--left">
            <p className="hero__text__content">Hi, I am Gus!</p>
            <p className="hero__text__content">Welcome to my portfolio</p>
          </div>
          <div className="hero__subtitle__block--right">
            <a href="https://github.com/gdameneses" className="hero__subtitle__block__item">My GitHub</a>
            <p className="hero__subtitle__block__item">or</p>
            <a href="#about" className="hero__subtitle__block__item">About me</a> {/* fix line heights here */}
          </div>
        </div>
          <div className="hero__header">
            <h1 className="hero__header__text--left">SOFTWARE</h1>
            <h1 className="hero__header__text--right">DEVELOPER</h1> 
          </div>
          <div className="d-flex justify-content-between flex-column flex-md-row">
            <Col xs={12} md={4} className="hero_footer">
              <p>
              A developer is not merely a coder they are architects 
              of innovation. Problem solvers, and pioneers of progress in the digital age. As technology continues to advance, the role of developers remains pivotal.
              </p>
            </Col>
            <div className="hero__footer__link">
              <a href="https://linkedin.com/in/gdameneses" className="hero__link">
                Discover my Linkedin
              </a>
            </div>
            </div>
      </Container>  
    </Container>
  );
};

export default Header;
