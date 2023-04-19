import axios from "axios";

const API_BASE = "http://localhost:3000/";
const API_URL = API_BASE + "api/v1/";
const API_URL_IMAGES = API_URL + "images";

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const postImage = async (title: string, image: File) => {
  const randomNum =
    Math.floor(Math.random() * 900000000000000) + 100000000000000;

  const formData = new FormData();
  formData.append("id", randomNum.toString());
  formData.append("file", image);
  formData.append("title", title);

  try {
    const response = await axios.post(API_URL_IMAGES, formData, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllImages = async () => {
  try {
    const response = await axios.get(API_URL_IMAGES);
    return response.data;
  } catch (error) {
    throw new Error("It was not possible to get the images.");
  }
};

export const removeImage = async (id: number) => {
  try {
    const response = await axios.delete(API_URL_IMAGES + "/" + id);
    return response.data;
  } catch (error: any) {
    throw new Error("It was not possible to delete the image.");
  }
};
