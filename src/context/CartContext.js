import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    const isInCart = (product) => {
        return cartList.some((item) => item.id === product.id);
    }

    const addCart = (product, quantity) => {

        const newProduct = {...product, quantity: quantity};
        
        if (isInCart(newProduct)) {
            const productInCart = cartList.find((item) => item.id === newProduct.id);
            if ( productInCart.quantity + quantity <= product.stock) {
                productInCart.quantity += quantity;
                alert('Nuevo producto agregado');
            } else {
                alert('Stock no disponible')
            }
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

    const clearCart = () => {
        setCartList([])
    }


    const getTotalPrice = () => {
        return cartList.reduce((acc,item) => acc + item.price,0)
    }




    return(
        <CartContext.Provider value={{cartList,addCart,removeCart,getTotalPrice,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}