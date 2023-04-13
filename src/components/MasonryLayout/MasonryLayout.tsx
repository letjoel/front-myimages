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
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles["my-masonry-grid"]}
      columnClassName={styles["my-masonry-grid_column"]}
    >
      {images.map((item: any) => (
        <MasonryBox key={item.id} wallSrc={item.imageUrl} />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
