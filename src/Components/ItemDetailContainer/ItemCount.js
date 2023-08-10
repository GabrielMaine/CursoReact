import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems, onAdd}) => {

    const [counter, setCounter] = useState(1);

    const incrementarContador = () => {
        if (counter < stockItems) {
            setCounter(counter + 1);
        } 
    }
    const decrementarContador = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return(
        <div className="mx-auto mb-1 d-flex justify-content-around" id="itemcount">
            <div className="">
                <div className="">
                    <div className="btn-group " role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-dark" onClick={decrementarContador} >-</button>
                        <button type="button" className="btn btn-outline-dark">{counter} </button>
                        <button type="button" className="btn btn-outline-dark" onClick={incrementarContador} >+</button>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <button type="button" className="btn btn-outline-dark" onClick={() => onAdd(counter)}>Agregar al carrito</button>    
                </div>
            </div>
        </div>  
    )
}

export default ItemCount;