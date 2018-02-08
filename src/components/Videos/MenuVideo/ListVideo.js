import React from 'react';
import List from 'material-ui/List';
import { Link } from 'react-router-dom';
const listVideo = props => {
  return (
    <List onClick={props.linkVideo}><Link to={'/video' + props.url}>{props.nameVideo}</Link></List>
  );
}

export default listVideo;