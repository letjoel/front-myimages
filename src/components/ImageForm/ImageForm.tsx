import { useState } from "react";
import styles from "./ImageForm.module.css";

type Props = {};

const ImageForm = (props: Props) => {
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
        <button className={styles.sendButton}>Send</button>
      </form>
    </div>
  );
};

export default ImageForm;
