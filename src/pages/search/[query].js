import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonVideo from "../../components/screens/Skeleton";
import VideoHorizontal from "../../components/videos/VideoHorizontal";
import { getVideosBySearch } from "../../redux/actions/videosAction";
// import styles from "../../styles/pages.module.scss";

export default function SearchPage() {
  const router = useRouter();
  const query = router.query.query;
  const dispatch = useDispatch();
  // console.log({ router, query });
  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  const { videos, loading } = useSelector((state) => state.searchResults);
  // console.log(videos);
  return (
    <div>
      {loading && [...Array(8)].map((_, i) => <SkeletonVideo key={i} />)}
      {videos?.map((video) => (
        <VideoHorizontal video={video} key={video.id?.videoId} searchScreen />
      ))}
    </div>
  );
}
