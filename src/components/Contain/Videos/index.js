import React, { Component } from 'react';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from 'video-react';
import './index.css';
import '../../../../node_modules/video-react/dist/video-react.css';
class Video extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.src !== this.props.url) {
      this.refs.player.load();
      return true;
    }
    return false;
  }
  render() {
    return (
      <div className="container-fluid">
        <Player autoPlay={false} ref="player">
          <source src={"http://10.10.1.65/videos/" +this.props.url} />
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton />
          </ControlBar>
        </Player>
      </div>
    );
  }
}
export default Video;
