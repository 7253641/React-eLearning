import React from 'react';
import List from 'material-ui/List';
import MapChapter from '../../showListChapter/MapChapter';
const listVideo = props => {
  return (
    <List>
      <MapChapter id={props.id} />
    </List>
  );
};

export default listVideo;
