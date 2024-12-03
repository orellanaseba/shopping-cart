import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
        // Verifica si el producto ya existe en el carrito
        const existingItem = prevItems.find((product) => product.id === item.id);

        if (existingItem) {
            // Si existe, aumenta la cantidad del producto

            return prevItems.map((product) =>
                product.id === item.id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );
        }

        setTotalItems(totalItems + 1)
        // Si no existe, agrega el producto al carrito con cantidad inicial de 1
        return [
            ...prevItems,
            { ...item, quantity: 1 }, // Añade el producto con cantidad = 1
        ];
    });
};


  return (
    <>
      <Header
        cartItems={cartItems}
        totalItems={totalItems}
        quantity={quantity}
      />
      <Outlet context={{ cartItems, addToCart, totalItems}} />
    </>
  );
}

export default App;
