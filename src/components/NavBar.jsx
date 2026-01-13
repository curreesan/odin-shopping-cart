// src/components/NavBar.jsx
import { Link } from "react-router";
import styles from "../styles/NavBar.module.css";

function NavBar() {
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
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
