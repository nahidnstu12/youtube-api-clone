import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoHorizontal from "../../components/videos/VideoHorizontal";
import { getVideosBySearch } from "../../redux/actions/videosAction";
import styles from "../../styles/pages.module.scss";

export default function SearchPage() {
  const router = useRouter();
  const query = router.query.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  const { videos, loading } = useSelector((state) => state.searchResults);
  // console.log(videos);
  return (
    <div>
      {videos?.map((video) => (
        <VideoHorizontal video={video} key={video.id.videoId} searchScreen />
      ))}
    </div>
  );
}
