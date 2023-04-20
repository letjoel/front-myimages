import { useParams } from "react-router-dom";
import ImageForm from "../../components/ImageForm/ImageForm";
import Footer from "../../components/Footer/Footer";

const EditPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>✏️</h1>
      <ImageForm imageId={id} editMode={true} />
      <Footer />
    </>
  );
};

export default EditPage;
