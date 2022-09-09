import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    const isInCart = (product) => {
        return cartList.some((item) => item.id === product.id);
    }

    const addCart = (newProduct) => {
        
        if (isInCart(newProduct)) {
            const productInCart = cartList.find((item) => item.id === newProduct.id);
            productInCart.quantity += newProduct.quantity;
        } 
        
        else {
            const newCartList = [...cartList, newProduct];
            setCartList(newCartList); 
        }
        
    }

    const removeCart = (productId) => {
        const newCartList = cartList.filter((item) => item.id !== productId );
        setCartList(newCartList);
    }


    return(
        <CartContext.Provider value={{cartList,addCart,removeCart}}>
            {children}
        </CartContext.Provider>
    )
}