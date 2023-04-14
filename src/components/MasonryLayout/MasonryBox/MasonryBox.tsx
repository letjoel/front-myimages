// import styles of this component
import styles from "./MasonryBox.module.css";

// MasonryBox component
const MasonryBox = ({ wallSrc, title, id }: any) => {
  return (
    <div className={styles["my-masonry"]}>
      <img src={wallSrc} style={{ width: "100%" }} alt="" />
      <div className={`${styles["my-masnry-description"]} flex`}>
        <div
          className={`${styles["my-masnry-user-box"]} flex align-items-center`}
        >
          <div
            className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}
          >
            <h1>{title}</h1>
            <span>❌ Remove</span> <span>✏️ Edit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryBox;
