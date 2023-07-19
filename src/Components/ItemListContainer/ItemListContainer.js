import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import arrayProductos from '../../Json/arrayProductos.json';

const ItemListContainer = () => {

  const[item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const promesa = new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve(id ? arrayProductos.filter(item=> item.type === id) : arrayProductos)
      }, 500)
    });
    promesa.then((data)=>{
      setItem(data)
    })
  }, [id])

  return (
    <div>
      <h1 className="text-center">¡Bienvenidos a la tienda de empandas!</h1>
      <ItemList item={item}/>
    </div>
  )
}

export default ItemListContainer