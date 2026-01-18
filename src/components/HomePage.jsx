import { Link } from "react-router";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.hero}>
        <h1>Welcome to Our Shop</h1>
        <p>Find amazing products at great prices!</p>

        <Link to="/shop" className={styles.shopButton}>
          Start Shopping
        </Link>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>Wide Selection</h3>
          <p>Hundreds of products across all categories</p>
        </div>

        <div className={styles.feature}>
          <h3>Fast Delivery</h3>
          <p>Get your items delivered quickly</p>
        </div>

        <div className={styles.feature}>
          <h3>Secure Shopping</h3>
          <p>Safe payments and privacy guaranteed</p>
        </div>
      </div>
    </div>
  );
}
