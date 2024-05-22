import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import NavBarComponent from '../NavBarComponents/NavBarComponents';
MainLayout


const ItemListContainerComponent = ({greeting}) => {
   
  const customStylesItem = {color: "white", fontsize: "2.5 rem", margin: "150 rem", cursor: "pointer" };


  return <div style={customStylesItem}> <NavBarComponent/>   </div>


  
};

export default ItemListContainerComponent
