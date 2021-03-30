import React from 'react'
import VideoItem from './VideoItem';
import  {Grid} from "@material-ui/core";

function VideoList({videos,videoSelect}) {
   const videoList = videos.map((vid,id)=> <VideoItem key={id} video={vid} videoSelect={videoSelect}/>)

   return (<Grid container spacing={1}>{videoList}</Grid>)
}

export default VideoList
