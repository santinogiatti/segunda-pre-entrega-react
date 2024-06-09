import React from 'react'
import { getProductById } from '../services/Products'

export const useProductById = (id) => {
  const [product, setProduct] = React.useState({})

  React.useEffect(() => {
    getProductById(id).then ((res)=>{
        setProduct(res.data)
    }).catch((error) =>{
        console.error(error)
    })
  }, [id])

  return {product}
}


