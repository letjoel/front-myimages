import { useState } from "react";
import styles from "./InputSearch.module.css";

type Props = {};

const InputSearch = ({ filter }: any) => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <form>
      <div className={styles.inputContainer}>
        <input
          onChange={filter}
          type="text"
          placeholder="🔎 Search"
          className={styles.input}
        />
      </div>
    </form>
  );
};

export default InputSearch;
