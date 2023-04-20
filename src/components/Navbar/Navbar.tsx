import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo_gray_md.png";
import bgImage from "../../assets/headbg4.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          opacity: 0.1,
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "50%",
          transform: "rotate(200deg)",
          zIndex: "-10",
        }}
      ></div>
      <div className={styles.blurCircle}></div>
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
