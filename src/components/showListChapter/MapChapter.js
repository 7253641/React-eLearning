import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/ChapterAction/ChapterAction';
import Chapters from './Chapters';
import DetailCourse from '../Contain/DetailCourse/DetailCourse';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
//import MapVideo from './MapVideo';
// import { Link } from 'react-router-dom';
class MapChapter extends Component {
  componentDidMount() {
    //  this.props.onFetchAllSession(this.props.SectionData.section.section_id);
  }
  render() {
    // let sectionName = null;
    // if (this.props.SectionData.section.length !== 0) {
    //   sectionName = this.props.SectionData.section.sectionList.map(section => {
    //     return <Chapters key={section.section_id} sectionName={section.section_name} />;
    //   });
    // }
    // return <div>{sectionName}</div>;
    let myCourse = this.props.SectionData.section;
    let myData = this.props.SectionData.section.sectionList;
    let myMap = new Map();
    let mySections = [];
    let myVideos = [];
    if (myData !== undefined) {
      myData.forEach((item, index) => {
        myMap.set(item.section_id, item.list_video);
        item.list_video.forEach((item, index) => {
          myVideos.push({
            video_name: item.video_name,
            video_url: 'http://10.10.1.65' + item.video_url,
          });
        });
        mySections.push({
          section_id: item.section_id,
          section_name: item.section_name,
          videos: myVideos,
        });
        myVideos = [];
      });
    }
    console.log(this.props);
    return (
      <div>
        <DetailCourse
          title={myCourse.course_name}
          img={myCourse.image_url}
          des={myCourse.description}
        />
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography
              type="title"
              color="inherit"
              style={{ fontSize: '18px' }}
            >
              Category
            </Typography>
          </Toolbar>
        </AppBar>
        {mySections.map(element => {
          return (
            <Chapters
              key={element.section_id}
              sectionId={element.section_id}
              myVideos={element}
              sectionName={element.section_name}
            />
          );
        })}
      </div>
    );
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapChapter);
