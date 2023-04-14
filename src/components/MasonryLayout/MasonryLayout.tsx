import styles from "./MasonryLayout.module.css";
import Masonry from "react-masonry-css";
import MasonryBox from "./MasonryBox/MasonryBox";

const MasonryLayout = ({ images }: any) => {
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
        {images.map((image: any) => (
          <MasonryBox
            key={image.id}
            wallSrc={image.imageUrl}
            title={image.title}
            id={image.id}
          />
        ))}
      </Masonry>
    </>
  );
};

export default MasonryLayout;
