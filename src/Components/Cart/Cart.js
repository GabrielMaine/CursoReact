import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Cart = () => {

    const { cart, getTotal, removeItem} = useContext(CartContext)

    return (
        <>
            {
                cart.length === 0 
                    ? <div className="my-2 text-center">
                          <h1>¡Tu carrito esta vacio!</h1>
                          <p>Te invitamos a probar nuestras empanadas. Podes ver nuestro catalogo <Link to='/'> aquí</Link>.</p>
                      </div>
                    : <div>
                          <div className="my-2 text-center">
                          <h1>Tu carrito:</h1>
                          </div>
                          {cart.map(p =>         
                          <Card bg="light" data-bs-theme="light" className="container mt-4 shadow w-75 mx-auto">
                            <Row>
                              <Col className="p-0">
                                <Card.Img className="object-fit-cover" src={p.image} alt={p.name} style={{height: '15rem'}}/>
                              </Col>
                              <Col className="">
                                <Card.Body className="h-75">
                                    <Card.Title className="text-start">{p.name}</Card.Title>
                                    <Card.Text className="text-start">
                                    <p>Precio: ${p.price}
                                    <br/>Cantidad: {p.quantity}
                                    <br/>Subtotal: ${p.quantity*p.price}</p>
                                    </Card.Text>
                                </Card.Body>
                                <div className="text-end">
                                  <button type="button" className="mx-3 btn btn-outline-dark" onClick={() => removeItem(p.id)}>Quitar del carrito</button>
                                </div>
                              </Col>
                            </Row>
                        </Card>
                    )}
                      <div className="w-75 mx-auto my-4">
                        <h3>El total es: ${getTotal()}</h3>
                        <Link to='/checkout'>
                          <button className="mx-3 mt-2 btn btn-outline-dark">Generar Compra</button>
                        </Link>
                      </div>
                    </div>
            }

        </>
    )
}

export default Cart