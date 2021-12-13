import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/pages.module.scss";
import { getMyPlaylist } from "../redux/actions/playlistAction";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SkeletonVideo from "../components/screens/Skeleton";
import { toast } from "react-toastify";

export default function myplaylists() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPlaylist());
  }, [dispatch]);

  const { playlist, loading, error } = useSelector((state) => state.playlists);

  return loading ? (
    <div className={styles.video_grid}>
      {[...Array(8)].map((_, i) => (
        <SkeletonVideo key={i} />
      ))}
    </div>
  ) : !error && !loading ? (
    <div className={styles.video_grid}>
      {playlist?.map((video) => (
        <Link href={`/channel/${video.id}`} key={video.id}>
          <a>
            <PlaylistItem video={video} subScreen />
          </a>
        </Link>
      ))}
    </div>
  ) : (
    <>
      <p className={styles.error_msg}>
        {error?.error?.message?.substring(0, 133)}
      </p>
      <p style={{ display: "none" }}>
        {error && toast.error(`${error.error?.status} (${error.error?.code})`)}
      </p>
    </>
  );
}

const PlaylistItem = ({ video }) => {
  const {
    id,
    snippet: {
      title,
      thumbnails: { medium },
    },
    contentDetails: { itemCount },
  } = video;
  return (
    <div className={styles.playlist}>
      <LazyLoadImage
        src={medium.url}
        effect="blur"
        className={`${styles.playlist__thumbnail}`}
        wrapperClassName={styles.videoHorizontal__thumbnail_wrapper}
      />
      <div className={styles.playlist__section}>
        <p>
          {title} •<span>{itemCount} videos</span>
        </p>
      </div>
    </div>
  );
};
