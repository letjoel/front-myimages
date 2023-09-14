import styles from "./HomePage.module.css";
import MasonryLayout from "../../components/MasonryLayout/MasonryLayout";
import ImageModal from "../../components/ImageModal/ImageModal";
import { getAllImages, getAllImagesMock } from "../../services/imageService";
import { useEffect, useState } from "react";
import { IImage } from "../../interfaces/image.interface";
import ImageForm from "../../components/ImageForm/ImageForm";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import InputSearch from "../../components/InputSearch/InputSearch";

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
  const [filteredImages, setFilteredImages] = useState<IImage[] | null>(null);

  useEffect(() => {
    getAllImagesMock()
      .then((images) => {
        setImages(images);
        setFilteredImages(images);
      })
      .catch((error) => console.log(error));
  }, [form, open]);

  // Filter images by title
  const [query, setQuery] = useState("");

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    if (images) {
      const filteredImages = images.filter((image) => {
        return image.title.toLowerCase().includes(query);
      });
      setFilteredImages(filteredImages);
    }
  };

  return (
    <>
      <Banner />
      <InputSearch filter={handleFilter} />
      <section className={styles.section}>
        <div className={`${styles["gallery-setting"]}`}>
          <div className={styles.addButtonContainer}>
            <h1>My images</h1>
            <button onClick={() => setForm(!form)} className={styles.addButton}>
              {form ? "Back" : "Add image"}
            </button>
          </div>

          {form ? (
            <ImageForm rerender={handleRerender} />
          ) : (
            <MasonryLayout imagesArray={filteredImages} viewImage={viewImage} />
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
