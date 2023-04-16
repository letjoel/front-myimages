import styles from "./MasonryLayout.module.css";
import Masonry from "react-masonry-css";
import MasonryBox from "./MasonryBox/MasonryBox";
import { IImage } from "../../interfaces/image.interface";

interface Props {
  imagesArray: IImage[] | null;
  viewImage: (id: number) => void;
}

const MasonryLayout: React.FC<Props> = ({ imagesArray, viewImage }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
      >
        {imagesArray &&
          imagesArray.map((image: IImage) => (
            <MasonryBox
              key={image.id}
              wallSrc={image.imageUrl}
              title={image.title}
              id={image.id}
              viewImageFc={viewImage}
            />
          ))}
      </Masonry>
    </>
  );
};

export default MasonryLayout;
