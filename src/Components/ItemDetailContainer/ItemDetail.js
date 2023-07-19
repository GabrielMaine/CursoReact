import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
  return (
    <Card bg="light" data-bs-theme="light" className="container mt-3 shadow w-75 m-auto">
        <Row>
            <Col className="p-0">
                <Card.Img className="mx-0 d-block object-fit-cover" src={item.image} alt={item.name} style={{height: '15rem'}}/>
            </Col>
            <Col className="">
                <Card.Body className="mx-auto d-block">
                    <Card.Title className="text-start">{item.id} - {item.name} ({item.initials})</Card.Title>
                    <Card.Text className="text-start">
                    <p>Precio: ${item.precio}<br/>{item.description}</p>
                    </Card.Text>
                </Card.Body>
                <div>
                    <ItemCount stockItems={10}/>
                </div>
            </Col>
        </Row>
    </Card>
  )
}

export default ItemDetail