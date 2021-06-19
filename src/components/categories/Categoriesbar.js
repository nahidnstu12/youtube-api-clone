import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCategoricVideos,
  getPopularVideos,
} from "../../redux/actions/videosAction";
import { keywords } from "../../utils/contsants";
import "./_categoriesbar.scss";

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

  

  return (
    <div className="category">
      {keywords.map((word, i) => (
        <div
          key={i}
          className={
            activeElement === word
              ? "category__element active"
              : "category__element"
          }
          onClick={() => handleActiveElement(word)}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default Categoriesbar;
