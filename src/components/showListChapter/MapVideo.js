import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/ChapterAction/ChapterAction';
// import Video from './Video';
// import { easing } from 'material-ui/styles/transitions';
class MapChapter extends Component {
  componentDidMount() {
    //this.props.onFetchAllSession();
  }
  reVideo = () => {
    // let quang = null;
    // let array = this.props.SectionData.section.sectionList;
    // let listVideoName = null;
    // let b = null;
    // if (array !== undefined) {
    //   var a = array.map(element => {
    //     if (element.length > 0) {
    //       listVideName = element.list_video;
    //       b = listVideName.map(ele => {
    //         quang = ele.video_name;
    //         <Video videoName = {quang}/>
    //       });
    //     } else {
    //       listVideName = null;
    //       quang = null;
    //     }
    //     console.log("listVideo ", element.list_video);
    //     //console.log(element.section_id.list_video.video_name);
    //     return <Video videoName = {quang}/>;
    //    })}
    // return <div>{b}</div>;
    let array = this.props.SectionData.sectionList;

    if (array !== undefined) {
      array.map(element => {
        return(
          console.log(element)
        )
        
      });
    }
  };
  render() {
    return <div>{this.reVideo()}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(MapChapter);
