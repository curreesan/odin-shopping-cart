import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  const { getCartCount } = useCart();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className={styles.link}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" className={styles.link}>
            Cart ({getCartCount()})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
