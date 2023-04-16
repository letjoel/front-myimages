import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo_gray_md.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} height={55} alt="logo" />
        <p>Imagine</p>
      </div>
      <nav>
        <ul className={styles.navlist}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
