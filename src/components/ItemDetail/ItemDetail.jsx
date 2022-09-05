import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({item}) => {
    const [productosAgregados, setProductosAgregados ] = useState(0);

    const agregarProductos = (items) => {
        setProductosAgregados(items);
        alert(`Agregaste ${items} productos a tu carrito`)
    }

    return(
        <div className="detail-container">
            <img src={item.image} className="detail-img" alt="Imagen" />
            <div className="detail-content">
                <h2 className="detail-content__name">{item.name}</h2>
                <p className="detail-content__description">{item.description}</p>
                <p className="detail-content__price">${item.price}</p>
                {
                    productosAgregados ? <LinkContainer to="/cart"><button className="btn btn-dark mb-4 p-2">Ir al carrito</button></LinkContainer> : <ItemCount initial={1} stock={item.stock} onAdd={agregarProductos}/>
                }
            </div>
        </div>
    );
}