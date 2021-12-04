import moment from "moment";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ShowMoreText from "react-show-more-text";
import {
  checkSubscriptionStatus,
  getChannelByVideos,
} from "../../redux/actions/channelAction";
import { addRating, getLikedVideo } from "../../redux/actions/likedVideoActions";
import styles from "./_video.module.scss";

export default function VideoMetadata({ videoData, videoId }) {
  // const [ratingText,setRating] = useState("none")
  const { snippet, statistics } = videoData;
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelByVideos(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  useEffect(() => {
    dispatch(getLikedVideo(videoId));
  }, [dispatch, videoId]);

  //  useEffect(() => {
  //    dispatch(addRating(videoId,ratingText));
  //  }, [dispatch, videoId,ratingText]);

  const handleRate = async (text) => {
    if (text !== "none") dispatch(addRating(videoId, text));
  };
  const { channel, CheckSubscription } = useSelector(
    (state) => state.channelDetails
  );
  const {rating} = useSelector(state => state.likedVideo)
  // console.log({rating, videoId});
  
  return (
    <div className={styles.videoMetaData}>
      <div className={styles.videoMetaData__top}>
        <h5>{title}</h5>
        <div className={styles.videoMetaData__views}>
          <span>
            {numeral(viewCount).format("0.a")} views
            <span className={styles.videoMetaData__space}> • </span>
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className={styles.icon}>
              <MdThumbUp
                size={26}
                className={`${rating === "like" && styles.liked}`}
                onClick={() => handleRate("like")}
              />
              {numeral(likeCount).format("0.a")}
            </span>
            <span className={styles.mr_3}>
              <MdThumbDown
                size={26}
                className={`${rating === "dislike" && styles.liked}`}
                onClick={() => handleRate("dislike")}
              />
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.videoMetaData__channel}>
        <div className={styles.videoMetaData__channel_thumb}>
          <img
            src={channel?.snippet?.thumbnails?.medium?.url}
            alt=""
            className={styles.avatarCircle}
          />
          <div className={styles.videoMetaData__channel_name}>
            <span>{channelTitle}</span>
            <span>
              {numeral(channel?.statistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
        </div>

        <button
          className={`${styles.btn} ${
            CheckSubscription ? styles.btn_gray : ""
          }`}
        >
          {CheckSubscription ? "Subscribed" : "Subscription"}
        </button>
      </div>
      <div className={styles.videoMetaData__description}>
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass={styles.showMoreText}
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
}
