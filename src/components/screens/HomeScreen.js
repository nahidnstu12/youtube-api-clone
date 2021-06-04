import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videosAction';
import Categoriesbar from '../categories/Categoriesbar';
import Video from '../videos/Video';
import './_homescreen.scss'


const HomeScreen = () => {
  const [videos,setVideos] = useState([])

  const dispatch = useDispatch()

  useEffect(()=>{
    // dispatch(getPopularVideos())
    
  },[dispatch])
  
  return (
    <div className="home_screen">
      <Categoriesbar />
      <div className='video-grid'>
        {[...new Array(20)].map(() => (
            <Video />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
