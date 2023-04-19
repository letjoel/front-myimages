import { useParams } from "react-router-dom";
import ImageForm from "../../components/ImageForm/ImageForm";

const EditPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>✏️</h1>
      <ImageForm imageId={id} editMode={true} />
    </>
  );
};

export default EditPage;
