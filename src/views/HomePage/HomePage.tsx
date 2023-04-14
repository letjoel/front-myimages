import styles from "./HomePage.module.css";
import images from "../../jsons/images.json";
import MasonryLayout from "../../components/MasonryLayout/MasonryLayout";

const HomePage = () => {
  return (
    <>
      <div
        className="flex justify-content-center"
        style={{ marginTop: "50px", padding: "50px" }}
      >
        <section>
          <div
            className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}
          >
            <h1>All images</h1>
          </div>
          <MasonryLayout images={images} />
        </section>
      </div>
    </>
  );
};

export default HomePage;
