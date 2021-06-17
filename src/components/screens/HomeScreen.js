import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/actions/videosAction";
import Categoriesbar from "../categories/Categoriesbar";
import Video from "../videos/Video";
import "./_homescreen.scss";

const HomeScreen = () => {
  // const [videos,setVideos] = useState([])
  const { videos } = useSelector((state) => state.homeVideos);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getPopularVideos())
    // console.log(videos.items)
  }, [dispatch]);
  // console.log(videos)

  return (
    <div className="home_screen">
      <Categoriesbar />
      <div className="video-grid">
        {videos.length !== 0 ? videos.map((video,index) => (
          <Video video={video} key={index}/>
        ))
        :
        <div>Loading...</div>
      }
      </div>
    </div>
  );
};

export default HomeScreen;
