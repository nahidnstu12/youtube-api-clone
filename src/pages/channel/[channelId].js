import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChannelByVideos } from "../../redux/actions/channelAction";
import { getVideosByChannel } from "../../redux/actions/videosAction";
import styles from "../../styles/pages.module.scss"
import Video from "../../components/videos/Video"
import Link from "next/link"
import numeral from "numeral";

export default function ChannelPage() {
  const router = useRouter();
  const channelId = router.query.channelId;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelByVideos(channelId));
  }, [dispatch, channelId]);

  const { videos, loading,channel } = useSelector((state) => state.channelDetails);
  // const { snippet, statistics } = useSelector(
  //   (state) => state.channelDetails?.channel
  // );
  const { snippet, statistics } =channel || {}
  const _videoId = videos?.snippet?.resourceId?.videoId;
  console.log(_videoId);
  return (
    <div>
      <div className={styles.channelHeader}>
        <div className={styles.dflex}>
          <img src={snippet?.thumbnails?.default?.url} alt="" />

          <div className={styles.channelHeader__details}>
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format("0.a")} subscribers
            </span>
          </div>
        </div>

        <button>Subscribe</button>
      </div>
      <div className={styles.video_grid}>
        {videos?.map((video, index) => (
          <Link key={index} href={`/watch/${video.snippet?.resourceId?.videoId}`} passHref>
            <a>
              <Video video={video} channelScreen />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
