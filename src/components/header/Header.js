import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import './Header.scss';

const BlurredElipse = ({top, left, width, height, color1, color2, color3}) => {
    const [angle, setAngle] = useState(45); // Initial angle value

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAngle(angle => (angle + 1) % 361);
        }, 4);

        return () => clearInterval(intervalId);
    }, []);

    return (
<div style={{top, left, height, width, '--angle': `${angle}deg`, '--color1': `${color1}`, '--color2': `${color2}`, '--color3': `${color3}`}} className="background__item "></div>
    );
};





const Header = () => {
  return (
    <Container fluid className="hero">
    <div className="background">
      <div className="background__img">
        {BlurredElipse({top: '30%', left: '10%', width: '30%', height: '40%', color1: '#0029FF', color2: '#00FFB2', color3: '#FF00E5'})}
        {BlurredElipse({top: '10%', left: '40%', width: '20%', height: '30%', color1: '#0029FF', color2: '#FF00D6', color3: '#00B2FF'})}
        {BlurredElipse({top: '50%', left: '60%', width: '25%', height: '30%', color1: '#0029FF', color2: '#FF00D6', color3: '#00B2FF'})}
        {BlurredElipse({top: '12%', left: '80%', width: '24%', height: '40%', color1: '#FF0000', color2: '#CCFF00', color3: '#00FF94'})}
      </div>
    </div>
      <Container fluid="md" className="hero__content">
        <div className="hero__subtitle align-items-start">
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
            <Col xs={12} md={5} className="hero_footer">
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
