import styles from "./MasonryBox.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MasonryBox = ({ wallSrc, title, id, viewImageFc }: any) => {
  const handleViewImage = (id: number) => {
    viewImageFc(id);
  };

  return (
    <div onClick={() => handleViewImage(id)} className={styles["my-masonry"]}>
      <img src={wallSrc} style={{ width: "100%" }} alt={title} loading="lazy" />
      <div className={`${styles["my-masnry-description"]} flex`}>
        <div
          className={`${styles["my-masnry-user-box"]} flex align-items-center`}
        >
          <div
            className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}
          >
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryBox;
