import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Projects.scss';

const Projects = () => {
    const generateScrollItem = (times, direction) => {
        const listOfItems = Array.from({ length: times });
        return (
            <React.Fragment>
                {listOfItems.map((_, index) => (
                    <Col key={index} className={`scrollTitle__item scroll--${direction} m-0 p-0`}>
                        <span>·</span>
                        <span>My Projects</span>
                    </Col>
                ))}
            </React.Fragment>
        );
    };


    return (
        <Container fluid className="projects__container">
            <Row className="scrollTitle">
              {generateScrollItem(40, 'left')}
            </Row>
            <Row className="scrollTitle">
              {generateScrollItem(40, 'right')}
            </Row>
        </Container>
    );
}

export default Projects;
