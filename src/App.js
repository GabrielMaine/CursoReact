import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda de empanadas. Se vienen cositas..."/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
