import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import './CardDivisor.scss'

function CardDivisor() {
    const card = ({title, text}) => {
        return (
            <Card className="divisor__card">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    return (
      <Container className="d-flex flex-row justify-content-around">
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
        )}
        </Container>
    );
}

export default CardDivisor;