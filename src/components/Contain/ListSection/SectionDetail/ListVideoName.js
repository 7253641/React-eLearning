import React from 'react';
import VideoName from './VideoName';
const ListVideoName = props => {
    return (
      <div>
        <VideoName
          videoUrl={props.videoUrl}
          videoName={props.videoName}
          id={props.id}
        />
      </div>
    );
  }
export default ListVideoName;
