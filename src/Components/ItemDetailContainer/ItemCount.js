import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }
    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return(
        <div className="mx-auto mt-5 d-flex justify-content-around h-100" id="itemcount">
            <div className="d-inline-block">
                <div className="">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementarStock} >-</button>
                        <button type="button" className="btn btn-outline-primary">{counter} </button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementarStock} >+</button>
                    </div>
                </div>
            </div>
            <div className="d-inline-block">
                <div className="">
                    <button type="button" className="btn btn-outline-primary" >Agregar al carrito</button>    
                </div>
            </div>
        </div>  
    )
}

export default ItemCount;