import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div>
      <h1>Hola admins</h1>
      {children}
    </div>
  )
}

export default AdminLayout
