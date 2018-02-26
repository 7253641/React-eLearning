import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/ChapterAction/ChapterAction';
import Video from './Video';
// import { Link } from 'react-router-dom';
//import Chapters from './Chapters';
class MapVideo extends Component {
  componentDidMount() {}
  render() {
    return <div><Video videoUrl={this.props.videoUrl} videoName ={this.props.videoName}/></div>;
  }
}
const mapStateToProps = state => {
  return {
    SectionData: state.section,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchAllSession: id => {
      dispatch(action.fetchDataSection(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapVideo);
