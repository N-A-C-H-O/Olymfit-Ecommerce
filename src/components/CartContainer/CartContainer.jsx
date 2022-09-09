import "./CartContainer.css";
import { CartListContainer } from "../CartListContainer/CartListContainer";

export const CartContainer = () => {
    return(
        <div>
            <h2 className="cart-title">Carrito de compras</h2>
            <CartListContainer />
        </div>
    )
}