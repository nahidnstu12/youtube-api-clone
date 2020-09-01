import React from 'react'
import  {Grid,Paper,Typography} from "@material-ui/core";


function VideoItem({video,videoSelect}) {
    return (
       <Grid item xs={12}>
           <Paper style={{display:"flex",alignItems:"center"}} onClick={()=>videoSelect(video)}>
               <img style={{ marginRight:"20px", marginLeft:"20px",padding:"5px"}} src={video.snippet.thumbnails.default.url} />
               <Typography variant="subtitle2">
                   {video.snippet.title}
               </Typography>
           </Paper>
       </Grid>
    )
}

export default VideoItem
