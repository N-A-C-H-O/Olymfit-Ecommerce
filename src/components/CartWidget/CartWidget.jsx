import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = () => {

    return (
        <>
            <i className='cart-icon fs-3 me-1'><FaShoppingCart/></i>
            <span className='cart-contador fs-5'>0</span>
        </>
    )
}