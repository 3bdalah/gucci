// cart context
import React,{createContext, useState, useEffect} from "react";
import localCart from "../utils/localCart";
const CartContext = createContext();
 function CartProvider({children}){
     const [cart, setCart] = useState(localCart);
     const [total,setTotal] = useState(0);
     const [cartItems,setCartItems] = useState(0);

   
     useEffect(()=>{
         let newCartItems = cart.reduce((total,cartItem)=>{
             console.log({total,cartItem});
             return (total += cartItem.amount);
         },0);
        setCartItems(newCartItems);
        let newTotal = cart.reduce((total,cartItem) => {
            return total += (cartItem.amount*cartItem.price);
        },0);
        newTotal = parseFloat(newTotal.toFixed(2));
        setTotal(newTotal);
     },[cart]);


     // remove item
     const removeItem = id => {
         let newCart = [...cart].filter(item => item.id !== id);
       setCart(newCart);
     };

    //  increacs amount 
    const increaseAmount = id => {};
    
    // decrease amount 
    const decreaseAmount = id => {};

    // add to cart 
    const addToCart = id => {};

    // clear Cart 
    const clearCart = id => {};


    return <CartContext.Provider value={{
        cart,total,cartItems,increaseAmount,removeItem,decreaseAmount,addToCart,clearCart
    }}>
    {children}
    </CartContext.Provider>
}


export  {CartContext,CartProvider};