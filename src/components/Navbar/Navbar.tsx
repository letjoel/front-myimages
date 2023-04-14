import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo_gray_md.png";

const Navbar = () => {
  return (
    <header className={styles.HeaderDesktop}>
      <nav>
        <div>
          <img src={logo} height={85} alt="logo" />
          <p>Imagine</p>
        </div>
        <ul>
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
