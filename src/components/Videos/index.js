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
import '../../../node_modules/video-react/dist/video-react.css';
import { videoActions } from '../../actions/videoActions/index';
import { connect } from 'react-redux';

class Video extends Component {
  componentDidMount() {
    this.props.fetchVideo();
  }
  render() {
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <Player autoPlay>
          <source src={this.props.videoURL} />
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

const mapStateToProps = state => {
  return {
    videoURL: state.videoReducer.URL ? state.videoReducer.URL : '',
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchVideo: () => {
      dispatch(videoActions.fetchVideo());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
