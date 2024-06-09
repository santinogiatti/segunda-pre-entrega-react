import React from 'react'

const ItemDetailContainer  = ({product}) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <div>
      <img src="https://imgs.search.brave.com/fVpQJYpbGdyGFdJMmZ0BElvyAcCtd9AwP50jHbVQ2ks/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Zp/Y2Npb24tc2luLWxp/bWl0ZXMvaW1hZ2Vz/LzYvNmEvTWlrZV9X/YXpvd3NraS5wbmcv/cmV2aXNpb24vbGF0/ZXN0L3NjYWxlLXRv/LXdpZHRoLWRvd24v/NDAwP2NiPTIwMjIw/NjI4MTI0MzUzJnBh/dGgtcHJlZml4PWVz.jpeg" alt="Descripción de la imagen" />
      </div>
    </div>
  )
}

export default ItemDetailContainer
