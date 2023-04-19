import styles from "./Footer.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <p>Imagine</p>
      <p>Favourite images app</p>
      <div className={styles.footerPoliciesContainer}>
        <p>Privacy policy · Sitemap · © {new Date().getFullYear()} elniu.dev</p>
      </div>
    </footer>
  );
};

export default Footer;
