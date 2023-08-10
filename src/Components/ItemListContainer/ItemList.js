import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from '../ItemListContainer/Item';

const ItemList = ({item}) => {
  return (
    <div>
    <Container fluid>
        <Row className="  ">
          {item.map(p=> <Item
          key ={p.id}
          id ={p.id}
          image ={p.image}
          name ={p.name}
          precio ={p.price} 
          initials={p.initials}
          description={p.description}      
          />)}
        </Row>
      </Container>
      </div>
  )
}

export default ItemList