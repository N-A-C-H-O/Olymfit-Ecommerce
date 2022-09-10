import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartListContainer.css";
import { ItemCart } from "../ItemCart/ItemCart";

export const CartListContainer = () => {
    const { cartList, removeCart, getTotalPrice, clearCart } = useContext(CartContext); 
    
    return(
        <>
            <div className="cart-list-container">
                {
                    cartList.map((item) => <ItemCart key={item.id} item={item} removeCart={removeCart} />)
                }
            </div>
            <div className="cart-list-info">
                <button onClick={clearCart} className="btn btn-danger btn-carrito-vaciar">Vaciar carrito</button>
                <button className="btn btn-success btn-carrito-comprar">Finalizar compra</button>
                <p>Importe total: ${getTotalPrice()}</p>
            </div>
        </>
    )
}