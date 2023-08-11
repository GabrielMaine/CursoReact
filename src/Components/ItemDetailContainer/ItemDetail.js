import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemCount from './ItemCount';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import Error from '../Error/Error';

const ItemDetail = ({item, load}) => {

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (count) => {
        addItem({ id: item.id, price: item.price, name: item.name, image: item.image }, count)
    };

    return (
        <>
        {item.name || load?
        <Card bg="light" data-bs-theme="light" className="container mt-4 shadow w-75 mx-auto">
            <Row>
                <Col className="p-0">
                    <Card.Img className="object-fit-cover" src={item.image} alt={item.name} style={{height: '15rem'}}/>
                </Col>
                <Col className="">
                    <Card.Body className="h-75">
                        <Card.Title className="text-start">{item.initials} - {item.name}</Card.Title>
                        <Card.Text className="text-start">
                        <p>Precio: ${item.price}<br/>{item.description}</p>
                        </Card.Text>
                    </Card.Body>
                    <div>
                        <ItemCount stockItems={item.stock} onAdd={handleOnAdd}/>
                    </div>
                </Col>
            </Row>
        </Card>
        : <Error/>
        } 
    </>
    )
}

export default ItemDetail