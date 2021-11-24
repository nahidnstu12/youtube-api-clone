import Categoriesbar from "../components/categories/Categoriesbar";
import {
  getCategoricVideos,
  getPopularVideos,
} from "../redux/actions/videosAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Index() {
  const { videos, activeCategory } = useSelector((state) => state.homeVideos);
  console.log(videos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
    // console.log("pageToken")
  }, [dispatch]);

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getCategoricVideos(activeCategory));
    }
  };
  
  return (
    <div>
      <Categoriesbar />
      Hello YTC-APP
      <button onClick={()=>fetchData()}>Get Videos</button>
    </div>
  );
}
