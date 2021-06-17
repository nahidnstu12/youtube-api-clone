import React, { useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import { AiFillEye } from "react-icons/ai";
import "./_video.scss";
import request from "../../utils/axios";

const Video = ({ video }) => {
  const [chanelIcon, setChanelIcon] = useState("");
  const {
    // id,
    snippet: {
      title,
      publishedAt,
      thumbnails: { medium },
      channelTitle,
      channelId,
    },
    contentDetails: { duration },
    statistics: { viewCount },
  } = video;

  //   console.log("time:"+moment("PT15M33S").fromNow())
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChanelIcon(items[0].snippet.thumbnails.default.url);
    };
    getChannelIcon();
  }, [channelId]);
  console.log(chanelIcon);
  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt="thumbnail" />
        <span>{_duration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(viewCount).format("0.a")} Views
        </span>
        <span className="space"> • </span>
        <span> {moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <img src={chanelIcon} alt="channel" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
