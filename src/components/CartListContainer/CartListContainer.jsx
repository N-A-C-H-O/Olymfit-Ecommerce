import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartListContainer.css";
import { ItemCart } from "../ItemCart/ItemCart";

export const CartListContainer = () => {
    const { cartList, removeCart } = useContext(CartContext); 
    
    return(
        <div className="cart-list-container">
            {
                cartList.map((item) => <ItemCart key={item.id} item={item} removeCart={removeCart} />)
            }
        </div>
    )
}