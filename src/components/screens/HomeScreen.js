import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoricVideos,
  getPopularVideos,
} from "../../redux/actions/videosAction";
import Categoriesbar from "../categories/Categoriesbar";
import Video from "../videos/Video";
import Loader from "./Loader";
import styles from "./_homescreen.module.scss";

const HomeScreen = () => {
  // const [videos,setVideos] = useState([])
  const { videos, activeCategory } = useSelector((state) => state.homeVideos);
  console.log(videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
    // console.log("pageToken")
  }, [dispatch]);
  console.log(videos.length);

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
      // console.log("fetch")
    } else {
      dispatch(getCategoricVideos(activeCategory));
    }
  };
  return (
    <div className={styles.home_screen}>
      <Categoriesbar />

      <InfiniteScroll
        dataLength={videos.length}
        hasMore={true}
        next={fetchData}
        loader={<Loader />}
        className={styles.video_grid}
      >
        {videos.map((video, index) => (
          <Video video={video} key={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default HomeScreen;
