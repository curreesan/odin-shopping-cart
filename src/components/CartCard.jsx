import { useCart } from "../context/CartContext";
import styles from "../styles/CartCard.module.css";

export default function CartCard({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.product.id, item.quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(item.product.id);
  };

  return (
    <div className={styles.cartItem}>
      <img
        src={item.product.image}
        alt={item.product.title}
        className={styles.itemImage}
      />

      <div className={styles.itemInfo}>
        <h3>{item.product.title}</h3>
        <p className={styles.itemPrice}>
          ${item.product.price.toFixed(2)} × {item.quantity}
        </p>
        <p className={styles.subtotal}>
          Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <div className={styles.quantityControls}>
        <button
          onClick={handleDecrement}
          disabled={item.quantity <= 1}
          className={styles.qtyBtn}
        >
          –
        </button>

        <span className={styles.quantity}>{item.quantity}</span>

        <button onClick={handleIncrement} className={styles.qtyBtn}>
          +
        </button>
      </div>

      <button onClick={handleRemove} className={styles.removeBtn}>
        Remove
      </button>
    </div>
  );
}
