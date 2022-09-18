import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartListContainer.css";
import { ItemCart } from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";

export const CartListContainer = () => {
    const { cartList, removeCart, getTotalPrice, clearCart } = useContext(CartContext); 
    
    return(
        <>
            <div className="cart-list-container">
                {
                    cartList.map((item) => <ItemCart key={item.id} item={item} removeCart={removeCart} />)
                }
            </div>
            <p className="cart-list-total">Importe total: ${getTotalPrice()}</p>
            <div className="cart-list-options">
                <button onClick={clearCart} className="btn btn-dark">Vaciar carrito</button>
                <Link to="/checkout" className="btn btn-cart-buy">
                    Continuar compra
                </Link>
            </div>
        </>
    )
}