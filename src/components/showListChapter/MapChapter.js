import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionSection from '../../actions/ChapterAction/ChapterAction';
import Chapters from './Chapters';
class MapChapter extends Component {
  componentDidMount() {
    this.props.onFetchAllSession(this.props.id);
  }
  render() {
    let myData = this.props.SectionData.section.sectionList;
    if (myData === undefined) {
      return <div />;
    } else {
      let mySections = null;
      mySections = myData.map(chapter => {
        return (
          <div key={chapter.section_id}>
            <Chapters
              sectionName={chapter.section_name}
              sectionVideo={chapter.list_video}
              id={this.props.id}
            />
          </div>
        );
      });
      return <div> {mySections} </div>;
    }
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
      dispatch(actionSection.fetchDataSection(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapChapter);
