import { useEffect, useState } from "react";
import styles from "./ImageForm.module.css";
import { postImage } from "../../services/imageService";
import FormAlert from "../FormAlert/FormAlert";

const ImageForm = ({ rerender }: any) => {
  // Alert form
  const [alert, setAlert] = useState<any>({});
  const { msg } = alert;

  // Form
  const [title, setTitle] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files ? event.target.files[0] : null;
    setImage(selectedImage);
    setPreviewUrl(selectedImage ? URL.createObjectURL(selectedImage) : null);
  };

  const handleSubmitNew = (e: any) => {
    e.preventDefault();
    if (!title) {
      setAlert({
        msg: "Title must be introduced",
        isError: true,
      });
      return;
    }
    if (!image) {
      setAlert({
        msg: "Image must be provided",
        isError: true,
      });
      return;
    }

    postImage(title, image)
      .then(() => {
        setAlert({
          msg: "Image successfuly uploaded...",
          isError: false,
        });
        setTimeout(() => {
          setAlert({});
          rerender();
        }, 3500);
      })
      .catch(() => {
        setAlert({
          msg: "Error when trying to send the image",
          isError: true,
        });
      });

    //
  };
  const handleSubmitEdit = () => {
    //
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmitNew} className={styles.form}>
        <h1>Add image</h1>
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id="title"
        />
        <label htmlFor="image">Upload image</label>
        <input
          onChange={handleFileSelect}
          type="file"
          name="img"
          id="image"
          accept="image/*"
        />
        {previewUrl && <img width={"100%"} src={previewUrl} alt="Preview" />}
        {msg && <FormAlert alert={alert} />}
        <button className={styles.sendButton}>Send</button>
      </form>
    </div>
  );
};

export default ImageForm;
