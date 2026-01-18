import { useCart } from "../context/CartContext";
import CartCard from "./CartCard";
import styles from "../styles/CartPage.module.css";

export default function CartPage() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <h1>Your Cart</h1>
        <div className={styles.emptyCart}>
          <p>Your cart is empty</p>
          <a href="/shop" className={styles.continueShopping}>
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1>Your Cart ({cartItems.length} items)</h1>

      <div className={styles.cartItemsList}>
        {cartItems.map((item) => (
          <CartCard key={item.product.id} item={item} />
        ))}
      </div>

      <div className={styles.cartSummary}>
        <div className={styles.total}>
          <span>Total:</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
      </div>
    </div>
  );
}
