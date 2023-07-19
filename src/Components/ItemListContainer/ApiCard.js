import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function ApiCard({image, username, status}) {
  return (
    <Col lg={3} md={4} sm={6}>
    <Card bg="dark" data-bs-theme="dark">
      <Card.Img className="mx-auto d-block" variant="top" src={image} style={{ height: '20rem' }} />
      <Card.Body className="mx-auto d-block">
        <Card.Title>{username}</Card.Title>
        <Card.Text>
         {status}
        </Card.Text>
        <Button variant="success">💗 Click </Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default ApiCard;