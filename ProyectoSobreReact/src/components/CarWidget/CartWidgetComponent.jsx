import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'



function CartWidgetComponent() {
  const customStyles = {color: "black", fontsize: "1.3 rem", cursor: "pointer" }
  return (
    <div>
       <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
       <span style={customStyles}> 0 </span>
    </div>
  )
}

export default CartWidgetComponent
