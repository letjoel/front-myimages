import axios from "axios";
import { IImage } from "../interfaces/image.interface";

const API_URL = "http://localhost:3000/";
const API_URL_IMAGES = API_URL + "images";

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const postImage = async (data: IImage, image: File) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("imageUrl", data.imageUrl);
  formData.append("title", data.title);

  try {
    const response = await axios.post(API_URL_IMAGES, formData, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
