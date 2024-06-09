import React from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponents/ItemListContainerComponents'
import { useParams } from 'react-router-dom'
import { useProductsByCategory } from '../hooks/useProductsByCategory'

const Category = () => {

  const {id} = useParams()

  const {products} = useProductsByCategory (id);
  return <ItemListContainerComponent products={products} /> 
};

export default Category
