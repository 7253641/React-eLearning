import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionSection from '../../actions/ChapterAction/ChapterAction';
import CourseInfo from '../../components/Course/CourseInformation/CourseInfo';
import ListSection from '../../components/Course/CourseDetail/ListSection';

class CourseDetail extends Component {
  componentDidMount() {
    this.props.onFetchAllSession(this.props.match.params.id);
  }
  render() {
    let myCourse = this.props.SectionData.section;
    return (
      <div>
        <CourseInfo
          title={myCourse.course_name}
          img={myCourse.image_url}
          des={myCourse.description}
        />
        <ListSection id={this.props.match.params.id} />
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
      dispatch(actionSection.fetchDataSection(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
