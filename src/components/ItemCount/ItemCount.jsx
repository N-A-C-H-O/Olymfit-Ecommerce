import { useState } from "react";
import './ItemCount.css'

export const ItemCount = ({initial, stock, onAdd}) => {
    const [counter,setCounter] = useState(initial);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }

    return(
        <div className="counter">
            <div className="counterManage d-flex justify-content-center my-4 align-items-center">
                <button disabled={counter === stock} className="btnCounter btn btn-dark fw-bold" onClick={increase}>+</button>
                <span className="displayCounter fs-1 mx-4">{counter}</span>
                <button disabled={counter <= 0} className="btnCounter btn btn-dark fw-bold" onClick={decrease}>-</button>
            </div>
            <div className="counterAdd d-flex justify-content-center">
                <button className="btnAdd btn btn-dark fw-bold" onClick={() => counter > 0 ? onAdd(counter) : alert('No seleccionaste productos')}>Agregar al carrito</button>
            </div>
        </div>
    )
}   