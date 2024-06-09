import React from 'react'
import { getAllProducts } from '../services/Products';

export const useProducts = () => {

 const [products, setProducts ] = React.useState([])

 React.useEffect(() => {
    getAllProducts()
    .then((response) => {
        setProducts (response.data.products);
    })
    .catch((error) => {
        console.error(error);
      });
 }, []);
 
    return {products}
}

