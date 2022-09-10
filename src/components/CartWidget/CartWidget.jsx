import { FaShoppingCart } from 'react-icons/fa';
import "./CartWidget.css";
import { useContext } from 'react';
import { CartContext} from "../../context/CartContext"

export const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);

    return (
        <>
            <i className='cart-icon fs-3 me-1'><FaShoppingCart/></i>
            {getTotalItems() !== 0 && <span className='cart-counter'>{getTotalItems()}</span>}
        </>
    )
}