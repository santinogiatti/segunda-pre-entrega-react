import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Item from '../Pages/Item'
import Category from '../Pages/Category'
import NavBarComponent from '../components/NavBarComponents/NavBarComponents'
import Cart from '../Pages/Cart/'



const MainRouter = () => {
  return (
   <BrowserRouter>
   <NavBarComponent/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/item/:id" element={<Item/>}/>
    <Route path="/category/:id" element={<Category/>}/>
    <Route path="/cart" element={<Cart />} />
   </Routes>
   </BrowserRouter>
  )
}

export default MainRouter
