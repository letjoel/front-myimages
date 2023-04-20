import styles from "./HomePage.module.css";
import MasonryLayout from "../../components/MasonryLayout/MasonryLayout";
import ImageModal from "../../components/ImageModal/ImageModal";
import { getAllImages } from "../../services/imageService";
import { useEffect, useState } from "react";
import { IImage } from "../../interfaces/image.interface";
import ImageForm from "../../components/ImageForm/ImageForm";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

const HomePage = () => {
  // Modal
  const [open, setOpen] = useState<Boolean>(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const viewImage = (id: number) => {
    setSelectedImage(id);
    setOpen(!open);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  // Add image form
  const [form, setForm] = useState<Boolean>(false);

  const handleRerender = () => {
    setForm(!form);
  };

  // Image data
  const [images, setImages] = useState<IImage[] | null>(null);

  useEffect(() => {
    getAllImages()
      .then((images) => {
        setImages(images);
      })
      .catch((error) => console.log(error));
  }, [form, open]);

  return (
    <>
      <Banner />
      <section className={styles.section}>
        <div className={`${styles["gallery-setting"]}`}>
          <div className={styles.addButtonContainer}>
            <h1>All images</h1>
            <button onClick={() => setForm(!form)} className={styles.addButton}>
              {form ? "Back" : "Add image"}
            </button>
          </div>

          {form ? (
            <ImageForm rerender={handleRerender} />
          ) : (
            <MasonryLayout imagesArray={images} viewImage={viewImage} />
          )}
        </div>
        {open && (
          <ImageModal
            image={images?.find((image) => image.id === selectedImage)!}
            close={handleCloseModal}
            rerender={handleRerender}
          />
        )}
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
