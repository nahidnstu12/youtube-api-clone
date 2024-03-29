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
import Link from "next/link";
import SkeletonVideo from "./Skeleton";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );
  const { accessToken } = useSelector((state) => state.auth);


  useEffect(() => {
    if (accessToken) {
      dispatch(getPopularVideos());
    }
    // console.log("pageToken")
  }, [dispatch]);
  // console.log(videos.length);

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getCategoricVideos(activeCategory));
    }
  };
  return (
    <div className={styles.home_screen}>
      <Categoriesbar />

      {loading ? (
        <div className={styles.video_grid}>
          {[...Array(12)].map((_, i) => (
            <SkeletonVideo key={i} />
          ))}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={false}
          next={fetchData}
          loader={<Loader />}
          className={styles.video_grid}
        >
          {videos?.map((video, index) => (
            <Link
              key={index}
              href={`/watch/${
                typeof video.id === "object" ? video.id.videoId : video.id
              }`}
              passHref
            >
              <a>
                <Video video={video} />
              </a>
            </Link>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default HomeScreen;
