import React from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponents/ItemListContainerComponents'
import { useCollectionItems } from "../hooks/useCollectionItems";


const Home = () => {
 const {items} = useCollectionItems("products")

    return  (

   <>
      <ItemListContainerComponent products={items}/>
      </>
    
    )
    
}

export default Home
