import { useContext } from "react";
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { ToastContainer } from 'react-toastify';

export const ItemDetail = ({item}) => {
    const { addCart } = useContext(CartContext);
    
    const [productosAgregados, setProductosAgregados ] = useState(false);

    const agregarProductos = (items) => {
        setProductosAgregados(true)
        addCart(item, items);
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
                <ToastContainer/>
            </div>
        </div>
    );
}