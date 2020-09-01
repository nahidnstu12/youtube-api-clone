import React,{useState,useEffect} from 'react';
import youtube from './apis/youtube';
import {Grid} from '@material-ui/core';
import SearchBar from './components/SearchBar';
import VideoFrame from './components/VideoFrame';
import VideoList from './components/VideoList';

function App() {

  const [videos,setVideos] = useState([]);
  const [selectedVideo,setSelect] = useState(null);

  const handleSearch = async (search) =>{
    const res =await youtube.get('search',{params:{
      part:'snippet',
      maxResults:5,
      key:'AIzaSyCHhmQByh7jiD45NTShA6kF2KEjk-tZSPw',
      q:search
  }});

  console.log(res.data.items[0].snippet);
  setVideos(res.data.items);
  setSelect(res.data.items[0]);
  }

  const onVideoSelect = video => setSelect(video)

  useEffect(()=>{
    // handleSearch('youtube clone')
  },[])

  return (
      <Grid container  style={{ paddingTop:"4%",paddingLeft:"4%",}}>
        <Grid item xs={12} >
          {/* Search Bar */}
          <SearchBar submit={handleSearch}/>
        </Grid>
        <Grid item sm={12} md={8} style={{paddingTop:"2%"}}>
          {/* Video Frame */}
          <VideoFrame video={selectedVideo}/>
        </Grid>
        <Grid item sm={12} md={4} style={{paddingTop:"2%",paddingLeft:"2%"}}>
          {/* VideoList */}
          <VideoList videos={videos} videoSelect={onVideoSelect}/>
        </Grid>
      </Grid>
    
  );
}

export default App;
