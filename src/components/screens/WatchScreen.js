import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRelatedVideos } from "../../redux/actions/videosAction";
import Comments from "../videos/Comments";
import VideoHorizontal from "../videos/VideoHorizontal";
import VideoMetadata from "../videos/VideoMetadata";
import styles from "./_watch.module.scss";
export default function WatchScreen({ videoId, videoData }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // dispatch(getRelatedVideos(videoId));
  }, [videoId, dispatch]);

  // const {videos} = useSelector((state) => state.relatedVideo);
  // console.log(videos);


  return (
    <div className={styles.watch_screen}>
      <div className={styles.watch_section}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
          title={videoData.title}
          className={styles.iframe_player}
        ></iframe>
        <div className={styles.watch_bottom}>
          <VideoMetadata videoData={videoData} videoId={videoId} />

          {/* <Comments
            videoId={videoId}
            totalComments={videoData?.statistics?.commentCount}
          /> */}
        </div>
      </div>
      <div className={styles.relatedVideos}>
        {/* {videos?.filter(video => video.snippet).map((video, j) => (
          <VideoHorizontal key={j} video={video} relatedVideo/>
        ))} */}
      </div>
    </div>
  );
}

//
