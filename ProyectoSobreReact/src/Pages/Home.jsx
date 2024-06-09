import React, { useEffect } from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponents/ItemListContainerComponents'
import { useProducts } from '../hooks/useProducts'

const Home = () => {
 const {products} = useProducts()

    return (


    
      <>
      <ItemListContainerComponent products={products}/>
      </>
    
  )

}

export default Home
