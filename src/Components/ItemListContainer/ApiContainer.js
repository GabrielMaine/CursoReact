import {useState, useEffect} from 'react';
import ApiCard from './ApiCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ApiContainer = () => {

const[personaje, setPersonaje] = useState([]);


useEffect(()=>{
    const getPersonajes = async()=>{
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    setPersonaje(data.results)
}
    getPersonajes()
}, [])

console.log(personaje) 
  return (
    <Container fluid>
      <Row>
        {personaje.map(p=> <ApiCard
        key ={p.id}
        image ={p.image}
        username ={p.name}
        status ={p.status}         
        />)}
      </Row>
    </Container>
  )
}

export default ApiContainer