import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChannelByVideos } from "../../redux/actions/channelAction";
import { getVideosByChannel } from "../../redux/actions/videosAction";
import styles from "../../styles/pages.module.scss";
import Video from "../../components/videos/Video";
import Link from "next/link";
import numeral from "numeral";
import { getVideosMyPlaylist } from "../../redux/actions/playlistAction";
import SkeletonVideo from "../../components/screens/Skeleton";

export default function ChannelPage() {
  const router = useRouter();
  const channelId = router.query.channelId;
  // console.log(channelId);
  // console.log(router);
  const ckActions = channelId?.includes("PLR") || false;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!ckActions) {
      dispatch(getVideosByChannel(channelId));
      dispatch(getChannelByVideos(channelId));
    }
  }, [dispatch, channelId]);

  useEffect(() => {
    if (ckActions) dispatch(getVideosMyPlaylist(channelId));
  }, [dispatch, channelId]);

  const { videos, loading, channel } = useSelector(
    (state) => state.channelDetails
  );

  const { playlistVideos,loading } = useSelector((state) => state.playlists);

  const { snippet, statistics } = channel || {};

  // const _videoId = videos?.snippet?.resourceId?.videoId;
  const videoData = ckActions ? playlistVideos : videos;
  // console.log(videoData);
  return (
    <div>
      <div className={styles.channelHeader}>
        {!ckActions && (
          <div className={styles.dflex}>
            <img src={snippet?.thumbnails?.default?.url} alt="" />

            <div className={styles.channelHeader__details}>
              <h3>{snippet?.title}</h3>
              <span>
                {numeral(statistics?.subscriberCount).format("0.a")} subscribers
              </span>
              <p>{statistics?.videoCount} videos</p>
            </div>
          </div>
        )}

        {/* <button>Subscribe</button> */}
      </div>
       {loading ? (
        <div className={styles.video_grid}>
          {[...Array(12)].map((_, i) => (
            <SkeletonVideo key={i} />
          ))}
        </div>
      ) : (
      <div className={styles.video_grid}>
        {videoData?.map((video, index) => (
          <Link
            key={index}
            href={`/watch/${video.snippet?.resourceId?.videoId}`}
            passHref
          >
            <a>
              <Video video={video} channelScreen />
            </a>
          </Link>
        ))}
      </div>)}
    </div>
  );
}
