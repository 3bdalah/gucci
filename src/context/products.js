// products context
import Axios from 'axios';
import React,{useEffect,useState,useContext,createContext} from 'react'
import url from "../utils/URL";
import { featuredProducts } from '../utils/helpers';
export const ProductContext = createContext();

export default function ProdcutProvider({children}){
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const [featured,setFeatured] = useState([]);
    

    useEffect(()=>{
        Axios.get(`${url}/products`).then(response => {
            const featured = featuredProducts(response.data); 
            setProducts(response.data);
            setFeatured(featured);
            setLoading(false);
        });
        return () => {};
    },[]);
    
    return (
        <ProductContext.Provider value={{products,loading, featured}} >
            {children}
        </ProductContext.Provider>
    )
}
