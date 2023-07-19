import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail';
import arrayProductos from '../../Json/arrayProductos.json'

const ItemDetailContainer = () => {
  const[item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const promesa = new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve(arrayProductos.find(item=> item.id === parseInt(id)))
      }, 500)
    });
    promesa.then((data)=>{
      setItem(data)
    })
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