import { IImage } from "../../interfaces/image.interface";
import styles from "./ImageModal.module.css";

const ImageModal: React.FC<any> = ({ image, close }) => {
  return (
    <div onClick={close} className={styles.modalWrapper}>
      <div className={styles.modal}>
        <h1>{image.title}</h1>
        <div className={styles.imageContainer}>
          <img src={image.imageUrl} alt={image.title} />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
