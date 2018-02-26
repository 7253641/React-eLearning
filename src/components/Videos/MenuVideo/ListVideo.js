import React from 'react';
import List from 'material-ui/List';
// import { Link } from 'react-router-dom';
import MapChapter  from '../../showListChapter/MapChapter';
const listVideo = props => {
  return (
    // <List onClick={props.linkVideo}><Link to={'/video' + props.url}>{props.nameVideo}</Link></List>
    <List>
      <MapChapter id={props.id} />
    </List>
  );
}

export default listVideo;