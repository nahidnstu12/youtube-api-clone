import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCategoricVideos,
  getPopularVideos,
} from "../../redux/actions/videosAction";
import { keywords } from "../../utils/contsants";
import styles from "./_categoriesbar.module.scss";

const Categoriesbar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();

  const handleActiveElement = (val) => {
    setActiveElement(val);

    if (val === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getCategoricVideos(val));
    }
  };

  const activeElementType = (word) =>
    activeElement === word
      ? styles.category__element + " " + styles.active
      : styles.category__element;

  return (
    <div className={styles.category}>
      {keywords.map((word, i) => (
        <div
          key={i}
          className={activeElementType(word)}
          onClick={() => handleActiveElement(word)}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default Categoriesbar;
