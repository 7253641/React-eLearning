import React from 'react';
import List from 'material-ui/List';
// import { Link } from 'react-router-dom';
import ListChapter from '../../showListChapter/ListChapter';
const listVideo = props => {
  return (
    // <List onClick={props.linkVideo}><Link to={'/video' + props.url}>{props.nameVideo}</Link></List>
    <List>
      <ListChapter />
    </List>
  );
}

export default listVideo;