import "./CartContainer.css";
import { CartListContainer } from "../CartListContainer/CartListContainer";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { LinkContainer } from "react-router-bootstrap";
import { BiErrorCircle } from "react-icons/bi"

export const CartContainer = () => {
    const { cartList } = useContext(CartContext);

    return(
        <div>
            <h2 className="cart-title">Carrito de compras</h2>
            { cartList.length !== 0 ? 
                <CartListContainer /> : 
                <div className="cart-noproducts">
                    <p>No tienes productos en el carrito <BiErrorCircle/></p>
                    <LinkContainer to="/">
                        <button className="btn btn-dark">Volver al inicio</button>
                    </LinkContainer>
                </div>
            }
        </div>
    )
}