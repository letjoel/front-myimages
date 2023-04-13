// import styles of this component
import styles from "./MasonryBox.module.css";

// MasonryBox component
const MasonryBox = ({ wallSrc }: any) => {
  return (
    <div className={styles["my-masonry"]}>
      <img src={wallSrc} style={{ width: "100%" }} alt="" />
    </div>
  );
};

export default MasonryBox;
