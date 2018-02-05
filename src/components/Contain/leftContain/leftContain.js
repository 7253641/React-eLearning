import React from 'react';
import './leftContain.css';
import Grid from 'material-ui/Grid';
const leftContain = () => {
  return(
    <div className="boxVideo">
      <Grid container>
        <Grid item xs={8} sm={8} md={6} lg={6}>
          <video  src="https://d125fmws0bore1.cloudfront.net/videos/video-bg-nd787.mp4" autoPlay="autoplay" loop="loop" width="800px" height="400px">
            <source src="https://d125fmws0bore1.cloudfront.net/videos/video-bg-nd787.mp4"/>
            <source src="https://d125fmws0bore1.cloudfront.net/videos/video-bg-nd787.ogv"/>
            <source src="https://d125fmws0bore1.cloudfront.net/videos/video-bg-nd787.webm"/>
          </video>
          </Grid>
       </Grid>
        </div>
  );
}


export default leftContain;