// cart context
import React,{createContext, useState, useEffect} from "react";
// import localCart from "../utils/localCart";
function getCartFromLocalStorage(){
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : [];
}
const CartContext = createContext();
 function CartProvider({children}){
     const [cart, setCart] = useState(getCartFromLocalStorage() );
     const [total,setTotal] = useState(0);
     const [cartItems,setCartItems] = useState(0);

     useEffect(()=>{
         localStorage.setItem("cart",JSON.stringify(cart));
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
    const increaseAmount = id => {
        const newCart = [...cart].map(item => {
            return item.id === id ? {...item,amount:item.amount+1} : {...item};
        });
        setCart(newCart);
    };
    
    // decrease amount 
    const decreaseAmount = (id,amount) => {
        if(amount === 1){
            removeItem(id);
            return;
        }else{
            const newCart = [...cart].map(item => {
                return item.id === id ? {...item,amount:item.amount - 1} : {...item};
            });
            setCart(newCart);
        }
    };

    // add to cart 
    const addToCart = product => {
        const {id,image:{url},title,price} = product;
        const item = [...cart].find(item => item.id === id);
       if(item){
           increaseAmount(id);
           return;
       }else{
           const newItem = {id,image:url,title,price,amount:1};
           const newCart = [...cart,newItem];
           setCart(newCart);
       }
   
    };

    // clear Cart 
    const clearCart = () => {
        setCart([]);
    };


    return <CartContext.Provider value={{
        cart,total,cartItems,increaseAmount,removeItem,decreaseAmount,addToCart,clearCart
    }}>
    {children}
    </CartContext.Provider>
}


export  {CartContext,CartProvider};