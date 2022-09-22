import './CartContainer.css';
import { BiErrorCircle } from 'react-icons/bi';
import { CartContext } from '../../context/CartContext';
import { CartListContainer } from '../CartListContainer/CartListContainer';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';


export const CartContainer = () => {
    const { cartList } = useContext(CartContext);

    document.title = "Carrito - OlymFit";
    
    return(
        <div>
            <h2 className='cart-title'>Carrito de compras</h2>
            { cartList.length !== 0 ? 
                <CartListContainer /> : 
                <div className='cart-noproducts'>
                    <p>No tienes productos en el carrito <BiErrorCircle/></p>
                    <LinkContainer to='/'>
                        <button className='btn btn-dark'>Volver al inicio</button>
                    </LinkContainer>
                </div>
            }
        </div>
    );
}