import React from 'react'
import  {Paper,Typography,Chip} from "@material-ui/core";

function VideoFrame({video}) {
    if(!video) return <div>Loading...</div>
    
    const vidsrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return (
       
        <>
        <Paper elevation={12} style={{height:"70%"}}>
            <iframe frameBorder="0" height="370px" width="100%" title="Video Player"  src={vidsrc} />
        </Paper>
        <Paper elevation={6} style={{padding:"15px"}}>
            <Typography variant="h5" style={{ padding:"5px"}}>{video.snippet.title}</Typography>
            <Typography variant="subtitle1" style={{ padding:"5px"}}>
            <Chip color="primary" label={video.snippet.channelTitle} />
            </Typography>
            <Typography variant="subtitle2" style={{ padding:"7px"}}>{video.snippet.description}</Typography>
        </Paper>

        </>
    )
}

export default VideoFrame
