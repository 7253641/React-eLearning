import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionSection from './../../../actions/ChapterAction/ChapterAction';
import Section from './Section';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';

class ListSection extends Component {
  componentDidMount() {
    this.props.onFetchAllSession(
      this.props.id ? this.props.id : this.props.match.params.id,
    );
  }
  render() {
    let myData = this.props.SectionData.section.sectionList;
    if (myData === undefined) {
      return <div />;
    } else {
      let mySections = null;
      mySections = myData.map(section => {
        return (
          <div key={section.section_id}>
            <Section
              sectionName={section.section_name}
              sectionVideo={section.list_video}
              id={this.props.id ? this.props.id : this.props.match.params.id}
            />
          </div>
        );
      });
      return (
        <div>
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
          {mySections}
        </div>
      );
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

export default connect(mapStateToProps, mapDispatchToProps)(ListSection);
