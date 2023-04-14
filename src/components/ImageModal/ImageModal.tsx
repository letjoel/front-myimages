import styles from "./ImageModal.module.css";

const ImageModal = ({ image }: any) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        Modal image
        <img src={image.imageUrl} alt={image.title} />
      </div>
    </div>
  );
};

export default ImageModal;
