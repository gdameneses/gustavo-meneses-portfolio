import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CardDivisor.scss'

function CardDivisor() {
    const card = ({title, text}) => {
        return (
            <Col xs={8} md={3}>
            <Card className="divisor__card">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        )
    }
    return (
      <Container>
        <Row className="cards__wrapper">
        {card({
            title: `Card Title`,
            text:
              `Some quick example text to build
              on the card title and make up
              the bulk of the card content.`
            }
        )}
        {card({
            title: `Card Title`,
            text:
              `Some quick example text to build
              on the card title and make up
              the bulk of the card content.`
            }
        )}
        {card({
            title: `Card Title`,
            text:
              `Some quick example text to build
              on the card title and make up
              the bulk of the card content.`
            }
        )}  {card({
            title: `Card Title`,
            text:
              `Some quick example text to build
              on the card title and make up
              the bulk of the card content.`
            }
        )}
        </Row>
      </Container>
    );
}

export default CardDivisor;