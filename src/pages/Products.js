import React,{useContext} from "react";

import {ProductContext} from "../context/products";
export default function Products() {
  const {loading,products} = useContext(ProductContext);
  // console.log(response);
  return <h1>hello from products page</h1>;
}
