import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {getFirestore, collection, getDocs, query, where, orderBy} from 'firebase/firestore';
import Error from '../Error/Error';

const ItemListContainer = () => {

  const[item, setItem] = useState([]); 
  const [load, setLoad] = useState(true) //Defino un state para que mi componente error no se muestre mientras recibo los datos de firebase

  const {id} = useParams();

  //Defino una funcion asincronica para extraer los datos de firebase y filtrarlos cuando corresponda
  const getData = async (categoria) => {
    const querydb = getFirestore();
    const queryCollection = categoria ? query(collection(querydb, 'item'), where("type", "==", categoria), orderBy("index"))
      : query(collection(querydb, 'item'), orderBy("index"));
    const resultado = await getDocs(queryCollection)
    const datos = resultado.docs.map(p => ({ id: p.id, ...p.data() }))
    setItem(datos)
    setLoad(false)
  }

  //Ejecuto la funcion getData
  useEffect(() => {
    getData(id)
  }, [id])

  return (
    <>{
      item.length>0 || load?
      <div>
      <div className="my-2">
        <h1 className="text-center">¡Bienvenidos a la tienda de empandas!</h1>
      </div>
      <ItemList item={item}/>
      </div>
      : <Error/>
    }</>

  )
}

export default ItemListContainer