import React from 'react';
import Categoriesbar from '../categories/Categoriesbar';
import Video from '../videos/Video';
import './_homescreen.scss'

const HomeScreen = () => {
  return (
    <div className="home_screen">
      <Categoriesbar />
      <div className='video-grid'>
        {[...new Array(20)].map(() => (
          <div className='video'>
            <Video />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
