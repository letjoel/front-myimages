import { useState } from "react";
import { IImage } from "../../interfaces/image.interface";
import styles from "./ImageModal.module.css";
import { useNavigate } from "react-router-dom";
import { removeImage } from "../../services/imageService";
import FormAlert from "../FormAlert/FormAlert";

const ImageModal: React.FC<any> = ({ image, close, rerender }) => {
  const navigate = useNavigate();

  const [remove, setRemove] = useState<Boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(image);

  const handleClick = () => {
    if (remove) {
      handleRemove();
    } else {
      setRemove(true);
    }
  };

  const handleRemove = () => {
    removeImage(selectedImage.id)
      .then(() => {
        setAlert({
          msg: "Image successfuly removed...",
          isError: false,
        });
        setTimeout(() => {
          close();
          navigate("/");
          setRemove(false);
          setSelectedImage({});
          setAlert({});
        }, 3750);
      })
      .catch(() => {
        setAlert({
          msg: "Error when trying to remove the image",
          isError: true,
        });
      });
  };

  // Alert form
  const [alert, setAlert] = useState<any>({});
  const { msg } = alert;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <button onClick={close}>X</button>
        </div>
        <h1>{image.title && image.title}</h1>

        <div className={styles.imageContainer}>
          <img src={image.imageUrl} alt={image.title} />
        </div>
        {msg && <FormAlert alert={alert} />}
        <div className={styles.buttonsContainer}>
          <button className={styles.removeButton} onClick={handleClick}>
            {remove ? "Confirm Remove? ✅" : "❌ Remove"}
          </button>

          <button
            className={styles.editButton}
            onClick={() => navigate(`/edit/${image.id}`)}
          >
            ✏️ Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
