import React, { Component } from 'react';

class Playlist extends Component {
  render() {
    let {title, length, short_desc, long_desc, thumbnail} = this.props.details;
    return(
        <div className="playlistItem" onClick={this.props.changeVideo}>
            <img src={thumbnail} />
            {title}
            {short_desc} ({length})
        </div>
    );
  }
}
export default Playlist;