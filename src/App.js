import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Error from './Components/Error/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Components/CartContext/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/category/:id" element={<ItemListContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
