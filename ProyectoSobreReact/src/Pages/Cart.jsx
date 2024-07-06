import React from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, addToCart, deleteFromCart } = React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleAddOne = (item) => {
    addToCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div style={styles.cartContainer}>
          <div style={styles.itemsContainer}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={styles.itemCard}
              >
                <div style={styles.imageContainer}>
                  <img
                    src={item.image || "https://imgs.search.brave.com/0W1TuUzZN1yMzs2HydRi-wYrh6ErVO-Ss7fywjId4O0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmxvZ2lzdGFyLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/My8wNy9NaWtlLVdh/em93c2tpLXNjYWxl/ZC1lMTY5MDczMzI5/OTE4NS53ZWJw"}  // URL de la imagen por defecto
                    alt={item.title}
                    style={styles.itemImage}
                  />
                </div>
                <div style={styles.itemDetails}>
                  <h3 style={styles.itemTitle}>{item.title}</h3>
                  <p style={styles.itemDescription}>{item.description}</p>
                  <p style={styles.itemPrice}>Precio unitario: ${item.price}</p>
                  <p style={styles.itemQuantity}>Cantidad: {item.quantity}</p>
                  <div style={styles.buttonsContainer}>
                    <button
                      onClick={() => handleAddOne(item)}
                      style={styles.addButton}
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveOne(item)}
                      style={styles.removeButton}
                    >
                      -
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      style={styles.deleteButton}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.totalContainer}>
            <h2>Total:</h2>
            ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </div>
        </div>
      ) : (
        <p style={styles.emptyMessage}>Tu carrito está vacío</p>
      )}
      <a href="http://localhost:5173/" style={styles.continueShoppingLink}>Seguir comprando</a>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  cartContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemsContainer: {
    flex: 1,
    padding: "10px",
  },
  itemCard: {
    margin: "10px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    marginRight: "15px",
  },
  itemImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: "18px",
    margin: "0 0 10px",
  },
  itemDescription: {
    fontSize: "14px",
    margin: "0 0 10px",
    color: "#555",
  },
  itemPrice: {
    fontSize: "16px",
    margin: "0 0 10px",
    color: "#000",
  },
  itemQuantity: {
    fontSize: "16px",
    margin: "0 0 15px",
    color: "#000",
  },
  buttonsContainer: {
    marginTop: "10px",
  },
  addButton: {
    marginRight: "10px",
    padding: "5px 10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#2ecc71",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  removeButton: {
    marginRight: "10px",
    padding: "5px 10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#e74c3c",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  totalContainer: {
    flex: 1,
    padding: "10px",
    textAlign: "right",
    fontSize: "20px",
    fontWeight: "bold",
    borderTop: "1px solid #ddd",
    marginTop: "10px",
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
  },
  continueShoppingLink: {
    display: "block",
    marginTop: "20px",
    textAlign: "center",
    color: "#3498db",
    textDecoration: "none",
    fontSize: "16px",
  }
};

export default Cart;