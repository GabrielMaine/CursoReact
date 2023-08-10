import {React, useContext} from 'react';
import img from './compra.png';
import {CartContext} from '../CartContext/CartContext';

const CartWidget = () => {

  const {getQuantity} = useContext(CartContext)

  return (
    <div>
        <img src={img} alt="carrito" height='60px' width='60px' />
        <span>{getQuantity()}</span>
    </div>
  )
}

export default CartWidget