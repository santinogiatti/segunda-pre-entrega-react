import React from 'react'
import NavBarComponent from '../components/NavBarComponents/NavBarComponents'



const MainLayout = ({children}) => {


  return (


    <div>

      <NavBarComponent />
      <children/>

    </div>
  )
}

export default MainLayout
