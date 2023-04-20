import { useState } from "react";
import styles from "./InputSearch.module.css";

type Props = {};

const InputSearch = (props: Props) => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <form>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="🔎 Search"
          className={styles.input}
        />
      </div>
    </form>
  );
};

export default InputSearch;
