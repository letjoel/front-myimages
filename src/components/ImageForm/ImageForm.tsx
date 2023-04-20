import { useEffect, useState } from "react";
import styles from "./ImageForm.module.css";
import {
  getOneImageById,
  postImage,
  updateImageAndTitle,
  updateTitle,
} from "../../services/imageService";
import FormAlert from "../FormAlert/FormAlert";
import { useNavigate } from "react-router-dom";
import { Configuration, OpenAIApi } from "openai";

const ImageForm = ({ rerender, imageId, editMode }: any) => {
  const navigate = useNavigate();

  // imageId if provided
  const [imageRecovered, setImageRecovered] = useState<any>(null);

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title) {
      setAlert({
        msg: "Title must be introduced",
        isError: true,
      });
      return;
    }
    if (!image) {
      if (editMode) {
        updateTitle(imageId, title)
          .then(() => {
            setAlert({
              msg: "Title successfuly updated...",
              isError: false,
            });
            setTimeout(() => {
              setAlert({});
              navigate("/");
            }, 3500);
          })
          .catch(() => {
            setAlert({
              msg: "Error when trying to update the title",
              isError: true,
            });
          });
      }

      setAlert({
        msg: "Image must be provided",
        isError: true,
      });
      return;
    }

    if (editMode) {
      updateImageAndTitle(imageId, title, image)
        .then(() => {
          setAlert({
            msg: "Image successfuly updated...",
            isError: false,
          });
          setTimeout(() => {
            setAlert({});
            navigate("/");
          }, 3500);
        })
        .catch(() => {
          setAlert({
            msg: "Error when trying to send the image",
            isError: true,
          });
        });
    } else {
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
    }
  };

  useEffect(() => {
    const load = async () => {
      if (imageId) {
        getOneImageById(imageId)
          .then((image) => {
            if (image) {
              setImageRecovered(image);
              setTitle(image.title);
              setImage(image.image);
              setPreviewUrl(image.imageUrl ? image.imageUrl : null);
            } else {
              console.log("Error when getting the existent image");
            }
          })
          .catch(() => {
            console.log("Error when getting the existent image");
          });
      }
    };

    load();
  }, []);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>{editMode ? "Edit image" : "Upload image"}</h1>
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id="title"
          maxLength={12}
          value={title || ""}
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
