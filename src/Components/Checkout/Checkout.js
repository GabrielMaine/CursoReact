import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';

export const Checkout = () => {
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Telefono: "",
        Direccion: ""
    })
    const { Nombre, Email, Email2, Telefono, Direccion } = buyer

    const { cart, clear, getTotal} = useContext(CartContext)

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Email !== Email2){
          e.target.Email2.setCustomValidity("Ingrese el mismo mail")
        } else {
          const total = getTotal()
          const dia = new Date()
          const data = { buyer, cart, total, dia }
          generateOrder(data)
          clear()
        }
    }

    const generateOrder = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Orders")
        const order = await addDoc(queryCollection, data)
        setOrderId(order.id)
    }

    return (
        <>
            {!orderId && 
            <div className="Container w-50 border rounded shadow my-5 mx-auto text-center py-2">
            <h2>Ingrese sus datos</h2>
            <Form onSubmit={handleSubmit}>
              <div className="">
                <FormGroup className="mx-auto my-4" as={Col} md="4">
                  <Form.Label>Ingrese su nombre</Form.Label>
                    <Form.Control
                      name="Nombre"
                      type="text"
                      placeholder='Nombre'
                      value={Nombre}
                      onChange={handleInputChange}
                      required
                    />
                </FormGroup>
                <FormGroup className="mx-auto mb-4" as={Col} md="4">
                  <Form.Label>Ingrese su Email</Form.Label>
                    <Form.Control
                      name="Email"
                      type="email"
                      placeholder='Email'
                      value={Email}
                      onChange={handleInputChange}
                      required
                    />
                </FormGroup>
                <FormGroup className="mx-auto mb-4" as={Col} md="4">
                  <Form.Label>Repita su Email</Form.Label>
                    <Form.Control
                      name="Email2"
                      type="email"
                      placeholder='Repetir email'
                      value={Email2}
                      onChange={handleInputChange}
                      required
                    />
                </FormGroup>
                <FormGroup className="mx-auto mb-4" as={Col} md="4">
                  <Form.Label>Ingrese su telefono</Form.Label>
                    <Form.Control
                      name="Telefono"
                      type="number"
                      placeholder='Telefono'
                      value={Telefono}
                      onChange={handleInputChange}
                      required
                    />
                </FormGroup>
                <FormGroup className="mx-auto my-4" as={Col} md="4">
                  <Form.Label>Ingrese su dirección</Form.Label>
                    <Form.Control
                      name="Direccion"
                      placeholder='Calle, Nro, Piso, Depto'
                      value={Direccion}
                      onChange={handleInputChange}
                      required
                    />
                </FormGroup>
                <div className="w-50 mx-auto mb-4 text-start px-5">
                  <button className="btn btn-outline-dark" type="submit">Enviar formulario</button>
                </div>
              </div>
            </Form>           
            </div>
          
            }
            {orderId && <>
            <div className="Container w-50 border border-primary rounded shadow my-5 mx-auto text-center">
                <h2>¡Tu compra se ha realizado con exito!</h2>
                <p>Pronto nos estaremos comunicando. <br/>El ID de tu compra es: {orderId}</p>
            </div>
            </>}
        </>
    )
}

export default Checkout