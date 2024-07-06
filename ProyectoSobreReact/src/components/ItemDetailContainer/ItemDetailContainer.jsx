import React from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = ({ product }) => {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart(product, 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product, 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginRight: "20px",
        }}
      >
        {product.images ? (
          product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
          ))
        ) : (
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        )}
      </div>
      <div
        style={{
          flex: 1,
          marginLeft: "20px",
        }}
      >
        <h1 style={{ 
          fontSize: "24px", 
          marginBottom: "10px",
          color: "#333",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" 
        }}>
          {product.title}
        </h1>
        <p style={{ 
          fontSize: "16px", 
          color: "#555", 
          marginBottom: "10px",
        }}>
          {product.description}
        </p>
        <p style={{ 
          fontSize: "20px", 
          fontWeight: "bold", 
          marginBottom: "20px",
          color: "#000",
          backgroundColor: "#fff",
          padding: "5px 10px",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" 
        }}>
          ${product.price}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            border: "1px solid #ddd",
            padding: "5px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <button
            onClick={handleAdd}
            style={{
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginRight: "10px",
              fontSize: "18px",
            }}
          >
            +
          </button>
          <span style={{ 
            fontSize: "18px", 
            margin: "0 10px",
            color: "#333",
            fontWeight: "bold",
          }}>
            {quantity}
          </span>
          <button
            onClick={handleRemove}
            style={{
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;