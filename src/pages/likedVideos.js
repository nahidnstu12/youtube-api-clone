import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/pages.module.scss";
import Video from "../components/videos/Video";
import Link from "next/link";
import { getAllLikedVideos } from "../redux/actions/likedVideoActions";

export default function LikedPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLikedVideos());
  }, [dispatch]);

  
  const {likedvideos} = useSelector((state) => state.likedVideo);
  console.log(likedvideos);
  return (
    <div>
      <div className={styles.channelHeader}>
        <div className={styles.dflex}>
          <h3>Liked Videos</h3>
        </div>
      </div>

      <div className={styles.video_grid}>
        {likedvideos?.map((video, index) => (
          <Link
            key={index}
            href={`/watch/${video.id}`}
            passHref
          >
            <a>
              <Video video={video} channelScreen />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
