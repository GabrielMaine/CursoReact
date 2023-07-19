import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from '../ItemListContainer/Item';

const ItemList = ({item}) => {
  return (
    <div>
    <Container fluid>
        <Row>
          {item.map(p=> <Item
          key ={p.id}
          id ={p.id}
          image ={p.image}
          name ={p.name}
          precio ={p.precio} 
          initials={p.initials}       
          />)}
        </Row>
      </Container>
      </div>
  )
}

export default ItemList