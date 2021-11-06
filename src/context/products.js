// products context
import React,{useState,useContext,createContext} from 'react'
export const ProductContext = createContext();

export default function ProdcutProvider({children}){
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState(false);
    const [featured,setFeatured] = useState([]);
    
    
    return (
        <ProductContext.Provider value={{products,loading, featured}} >
            {children}
        </ProductContext.Provider>
    )
}
