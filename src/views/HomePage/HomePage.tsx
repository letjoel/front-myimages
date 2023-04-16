import styles from "./HomePage.module.css";
// import images from "../../jsons/images.json";
import MasonryLayout from "../../components/MasonryLayout/MasonryLayout";
import ImageModal from "../../components/ImageModal/ImageModal";
import { postImage, getAllImages } from "../../services/imageService";
import { useEffect, useState } from "react";
import { IImage } from "../../interfaces/image.interface";
import { useFetcher } from "react-router-dom";

const HomePage = () => {
  // Image data
  const [images, setImages] = useState<IImage[] | null>(null);

  useEffect(() => {
    getAllImages()
      .then((images) => {
        setImages(images);
      })
      .catch((error) => console.log(error));
  }, []);

  // Modal

  const [open, setOpen] = useState<Boolean>(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [firstRender, setFirstRender] = useState<Boolean>(false);

  const viewImage = (id: number) => {
    setSelectedImage(id);
    setOpen(!open);
  };

  const handleCloseModal = () => {
    setOpen(!open);
  };

  return (
    <section className={styles.section}>
      <div className={`${styles["gallery-setting"]}`}>
        <div className={styles.addButtonContainer}>
          <h1>All images</h1>
          <button
            onClick={() => console.log("click")}
            className={styles.addButton}
          >
            Add image
          </button>
        </div>
        <MasonryLayout imagesArray={images} viewImage={viewImage} />
      </div>
      {open && (
        <ImageModal
          image={images?.find((image) => image.id === selectedImage)!}
          close={handleCloseModal}
        />
      )}
    </section>
  );
};

export default HomePage;
