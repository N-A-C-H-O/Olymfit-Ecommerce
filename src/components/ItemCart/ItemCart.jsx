/* import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; */

import { MdDelete } from "react-icons/md";
import "./ItemCart.css";


export const ItemCart = ({item, removeCart}) => {

    return(
        <div className="cart-item">
            <img src={item.image} alt="producto" />
            <h4>{item.name}</h4>
            <p>{item.quantity} ud/s</p>
            <p>Precio: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <MdDelete onClick={() => removeCart(item.id)} className="btn-cart-delete"/>
        </div>
    )
}