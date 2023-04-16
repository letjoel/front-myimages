import styles from "./HomePage.module.css";
import images from "../../jsons/images.json";
import MasonryLayout from "../../components/MasonryLayout/MasonryLayout";
import ImageModal from "../../components/ImageModal/ImageModal";

const HomePage = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles["gallery-setting"]}`}>
        <div className={styles.addButtonContainer}>
          <h1>All images</h1>
          <button className={styles.addButton}>Add image</button>
        </div>
        <MasonryLayout images={images} />
      </div>
      <ImageModal image={images[0]} />
    </section>
  );
};

export default HomePage;
