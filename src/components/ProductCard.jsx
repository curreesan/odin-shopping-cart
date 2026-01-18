import { useState } from "react";
import { useCart } from "../context/CartContext";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>

      <div className={styles.quantityControls}>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
        />
        <button onClick={handleIncrement}>+</button>
      </div>

      <button className={styles.addToCart} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
