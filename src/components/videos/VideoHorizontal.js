import moment from "moment";
import { useRouter } from "next/dist/client/router";
import numeral from "numeral";
import { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../../utils/axios";
import styles from "./_video.module.scss";

export default function VideoHorizontal({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const router = useRouter()
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    // if (isVideo)
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const handleClick = () => {
    
       router.push(`/watch/${id.videoId}`)
      //  history.push(`/channel/${_channelId}`);
  };
  return (
    <div className={styles.videoHorizontal} onClick={handleClick}>
      
      <div className={styles.videoHorizontal__left}>
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className={styles.videoHorizontal__thumbnail}
          wrapperClassName={styles.videoHorizontal__thumbnail_wrapper}
        />
        <span className={styles.videoHorizontal__duration}>{_duration}</span>
      </div>
      <div className={styles.videoHorizontal__right}>
        <p className={styles.videoHorizontal__title}>{title}</p>
        <div className={styles.videoHorizontal__channel}>
          <p>{channelTitle}</p>
          <div className={styles.videoHorizontal__details}>
            <AiFillEye /> {numeral(views).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </div>
        </div>
      </div>
    </div>
  );
}
