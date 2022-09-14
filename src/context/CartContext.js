import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList));
    },[cartList])


    const isInCart = (product) => {
        return cartList.some((item) => item.id === product.id);
    }

    const errorNotif = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    
    const successNotif = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const addCart = (product, quantity) => {

        const newProduct = {...product, quantity: quantity};
        
        if (isInCart(newProduct)) {
            const productInCart = cartList.find((item) => item.id === newProduct.id);
            if ( productInCart.quantity + quantity <= product.stock) {
                productInCart.quantity += quantity;
                successNotif('Agregaste productos al carrito 🛒');

            } else {
                errorNotif('Stock no disponible 😕');
            }
        } 
        
        else {
            const newCartList = [...cartList, newProduct];
            setCartList(newCartList); 
            successNotif('Agregaste productos al carrito 🛒');
        }
        
    }

    const removeCart = (productId) => {
        const newCartList = cartList.filter((item) => item.id !== productId );
        setCartList(newCartList);
    }

    const clearCart = () => {
        setCartList([])
    }

    const getTotalPrice = () => {
        return cartList.reduce((acc,item) => acc + item.price * item.quantity,0)
    }

    const getTotalItems = () => {
        return cartList.reduce((acc,item) => acc + item.quantity,0)
    }

    return(
        <CartContext.Provider value={{cartList,addCart,removeCart,getTotalPrice,clearCart, getTotalItems}}>
            {children}
        </CartContext.Provider>
    )
}