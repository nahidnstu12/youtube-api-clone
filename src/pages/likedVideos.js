import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/pages.module.scss";
import Video from "../components/videos/Video";
import Link from "next/link";
import { getAllLikedVideos } from "../redux/actions/likedVideoActions";
import SkeletonVideo from "../components/screens/Skeleton";
import { toast } from "react-toastify";

export default function LikedPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLikedVideos());
  }, [dispatch]);

  const { likedvideos, loading, error } = useSelector(
    (state) => state.likedVideo
  );
  // console.log(loading);
  return (
    <div>
      <div className={styles.channelHeader}>
        <div className={styles.dflex}>
          <h3>Liked Videos</h3>
        </div>
      </div>
      {loading ? (
        <div className={styles.video_grid}>
          {[...Array(8)].map((_, i) => (
            <SkeletonVideo key={i} />
          ))}
        </div>
      ) : !error && !loading ? (
        <div className={styles.video_grid}>
          {likedvideos?.map((video, index) => (
            <Link key={index} href={`/watch/${video.id}`} passHref>
              <a>
                <Video video={video} channelScreen />
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <>
          <p className={styles.error_msg}>
            {error?.error?.message?.substring(0, 133)}
          </p>
          {/* {toast.error(`${error?.status} (${error?.code})`)} */}
        </>
      )}
      <p style={{ display: "none" }}>
        {error && toast.error(`${error.error?.status} (${error.error?.code})`)}
      </p>
    </div>
  );
}
