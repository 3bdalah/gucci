import React,{useContext} from "react";
import {CartContext} from "../context/cart";
import EmptyCart from  "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/EmptyCart";
import {Link} from "react-router-dom";

export default function Cart() {
  let user = false;
  const {cart,total} = useContext(CartContext);
  console.log({cart,total});

   if(cart.length === 0){ 
      return <EmptyCart/>
   }
  // return <h1>hello from cart page</h1>;
}
