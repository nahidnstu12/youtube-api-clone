import Comments from "../videos/Comments";
import VideoHorizontal from "../videos/VideoHorizontal";
import VideoMetadata from "../videos/VideoMetadata";
import styles from "./_watch.module.scss";
export default function WatchScreen({ videoId, videoData }) {
  // const {title} = videoData
  // console.log(videoData);
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

          <VideoMetadata videoData={videoData} videoId={videoId}/>

          <Comments />
        </div>
      </div>
      <div className={styles.relatedVideos}>
        {[...Array(10)].map((i, j) => (
          <VideoHorizontal key={j} />
        ))}
      </div>
    </div>
  );
}

// 
