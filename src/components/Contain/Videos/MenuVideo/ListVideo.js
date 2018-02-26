import React from 'react';
import List from 'material-ui/List';
import ListSection  from './../../ListSection/ListSection';
const listVideo = props => {
  return (
    <List>
      <ListSection id={props.id} />
    </List>
  );
}

export default listVideo;