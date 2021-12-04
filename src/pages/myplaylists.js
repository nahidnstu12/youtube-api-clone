import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/pages.module.scss";
import { getMyPlaylist } from "../redux/actions/playlistAction";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function myplaylists() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPlaylist());
  }, [dispatch]);

  const { playlist } = useSelector((state) => state.playlists);

  return (
    <div className={styles.video_grid}>
      {playlist?.map((video) => (
        <Link href={`/channel/${video.id}`} key={video.id}>
          <a>
            <PlaylistItem video={video} subScreen />
          </a>
        </Link>
      ))}
    </div>
  );
}

const PlaylistItem = ({video}) => {
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
