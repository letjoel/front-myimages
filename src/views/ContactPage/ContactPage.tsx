import Footer from "../../components/Footer/Footer";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <>
      <section className={styles.contactSection}>
        <h1>Contact us</h1>
        <p>
          Get in contact with us by{" "}
          <a className={styles.mailto} href="mailto: info@elniu.dev">
            email
          </a>
        </p>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
