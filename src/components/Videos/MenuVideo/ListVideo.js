import React from 'react';
import List from 'material-ui/List';
// import { Link } from 'react-router-dom';
import MapChapter  from '../../showListChapter/MapChapter';
const listVideo = props => {
  console.log(this.props);
  return (
    // <List onClick={props.linkVideo}><Link to={'/video' + props.url}>{props.nameVideo}</Link></List>
    <List>
      <MapChapter />
    </List>
  );
}

export default listVideo;