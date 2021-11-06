// products context
import React from 'react'
export const ProductContext = React.createContext();

export default function ProdcutProvider({children}){
    const greeting = "hello";
    const product = {id:1,title:"product name"};
    return (
        <ProductContext.Provider value={{greeting,product}} >
            {children}
        </ProductContext.Provider>
    )
}
