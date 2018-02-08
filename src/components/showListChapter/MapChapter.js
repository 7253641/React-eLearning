import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/ChapterAction/ChapterAction';
import Chapters from './Chapters';
//import MapVideo from './MapVideo';
class MapChapter extends Component {
  componentDidMount() {
    //this.props.onFetchAllSession();
  }
  render() {
    let sectionName = null;
    console.log(this.props.SectionData.section);
    if (this.props.SectionData.section.length !== 0) {
      sectionName = this.props.SectionData.section.sectionList.map(section => {
        return <Chapters key={section.section_id} sectionName={section.section_name} />;
      });
    }
    return <div>{sectionName}</div>;
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
