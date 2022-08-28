import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [counter,setCounter] = useState(initial);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }

    return(
        <div className="counter-container">
            <div className="counter-manage d-flex justify-content-center my-4 align-items-center">
                <button disabled={counter === stock} className="counter-btn btn btn-dark fw-bold" onClick={increase}>+</button>
                <span className="displayCounter fs-1 mx-4">{counter}</span>
                <button disabled={counter === 1} className="counter-btn btn btn-dark fw-bold" onClick={decrease}>-</button>
            </div>
            <div className="counter-add d-flex justify-content-center">
                <button className="counter-add__btn btn btn-dark fw-bold" onClick={() => onAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
    );
}   