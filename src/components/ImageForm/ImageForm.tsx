import React from "react";

type Props = {};

const ImageForm = (props: Props) => {
  return (
    <>
      <h1>Add image</h1>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="" />
      <label htmlFor="img">Image</label>
      <input type="file" name="img" />
      <button>Add</button>
    </>
  );
};

export default ImageForm;
