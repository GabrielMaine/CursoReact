import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(''); //State para almacenar el item
  const {id} = useParams(); //Leemos el ID del item URL para cargar el item correspondiente

  const getSelected = async (idItem) => { //Funcion para cargar el item desde Firestore
    try {
        const querydb = getFirestore();
        const document = doc(querydb, "item", idItem)
        const response = await getDoc(document)
        const result = { id: response.id, ...response.data() }
        setItem(result)
    } catch (error) {
        console.log(error)
    } finally{
    }
}

useEffect(() => { //Effect para ejecutar la funcion de carga del item
    getSelected(id) 
}, [id])
  
    return (
      <div>
        <Container fluid>
          <Row>
            <ItemDetail item={item}/>
          </Row>
        </Container>
      </div>
    )
}

export default ItemDetailContainer