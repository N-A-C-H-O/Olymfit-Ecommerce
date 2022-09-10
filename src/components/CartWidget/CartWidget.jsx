import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext} from "../../context/CartContext"

export const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);

    return (
        <>
            <i className='cart-icon fs-3 me-1'><FaShoppingCart/></i>
            {getTotalItems() === 0 ? <span className='fs-5'>0</span> : <span className='fs-5'>{getTotalItems()}</span>}
        </>
    )
}