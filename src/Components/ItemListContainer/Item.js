import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {NavLink} from 'react-router-dom';

function Item({id, image, name, precio, initials, description}) {
  return (
    <Col lg={3} md={4} sm={6} className="my-2">
    <Card bg="light" data-bs-theme="light" className="shadow h-100">
      <Card.Img className="mx-auto d-block object-fit-cover" variant="top" src={image} alt={name} style={{height: '15rem'}}/>
      <Card.Body className="mx-auto d-block w-100">
        <Card.Title className="text-start">{initials} - {name}</Card.Title>
        <Card.Text className="text-start">
         <p>{description} <br/>Precio: ${precio}</p>
        </Card.Text>
      </Card.Body>
      <div className="text-end mx-2 my-2">
          <NavLink to={`/item/${id}`} className="" ><Button variant="success">Ver detalle</Button></NavLink>
      </div>
    </Card>
    </Col>
  );
}

export default Item;