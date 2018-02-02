import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/index';
import Chapters from './Chapters';
// import callAPI from '../../api/apiCaller';
class MapChapter extends Component {
  componentDidMount() {
    this.props.onFetchAllChapters();
  }
  render() {
    let chapters = null;
    if (this.props.chaptersData.chapters.length > 0) {
      chapters = this.props.chaptersData.chapters.map(chapter => {
        return <Chapters key={chapter.id} title={chapter.title} />;
      });
    }
    return <div>{chapters} </div>;
  }
}
const mapStateToProps = state => {
  return {
    chaptersData: state.chapters,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchAllChapters: () => {
      dispatch(action.fetchData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapChapter);
