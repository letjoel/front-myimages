import axios from "axios";
import { imageMock } from "../data/imageMock";

const API_BASE = "https://dolphin-app-43smz.ondigitalocean.app/";
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

export const getAllImagesMock = async () => {
  try {
    const response = imageMock;
    return response;
  } catch (error) {
    throw new Error("It was not possible to get the images.");
  }
};

export const getOneImageById = async (id: string) => {
  try {
    const response = await axios.get(API_URL_IMAGES + "/id/" + id);
    return response.data;
  } catch (error) {
    throw new Error("It was not possible to get the image.");
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

export const updateTitle = async (id: string, title: string) => {
  try {
    const response = await axios.patch(API_URL_IMAGES + "/" + id, { title });
    return response.data;
  } catch (error: any) {
    throw new Error("It was not possible to modify the title.");
  }
};

export const updateImageAndTitle = async (
  id: string,
  title: string,
  image: File
) => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("file", image);
  formData.append("title", title);

  try {
    const response = await axios.patch(
      API_URL_IMAGES + "/fullupdate/" + id,
      formData,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
