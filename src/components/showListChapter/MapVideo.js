import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/ChapterAction/ChapterAction';
import Video from './Video';
//import Chapters from './Chapters';
class MapChapter extends Component {
  componentDidMount() {
    //this.props.onFetchAllSession();
  }
  render() {
    // console.log(this.props.SectionData.section.sectionList);
    // console.log(this.props.listNameVideo);
    // if(this.props.listNameVideo[0][0] !== 0)
    //{console.log(this.props.listNameVideo[2][2].section_id);}
    //let videoid = this.props.SectionData.section.sectionList;
    // let arrayName = [];
    // let videoNameList = null;
    // for(let i = 0; i<this.props.listNameVideo.length; i++)
    // {
    //   if(this.props.listNameVideo[i].length !== 0)
    //   {
    //     //console.log(videoid[i].section_id);
    //     // console.log(this.props.listNameVideo[i][i].section_id);
    //     // console.log(this.props.listNameVideo);
    //     for(let k = 0; k<this.props.SectionData.section.sectionList.length; k++){
    //       // console.log(this.props.SectionData.section.sectionList[k].section_id);
    //       if(videoid[i].section_id === this.props.SectionData.section.sectionList[k].section_id){
    //           arrayName.push(this.props.listNameVideo[i].video_name)
    //       }
    //     }
    //   }
    // }
    //arrayName.push(this.props.listNameVideo);
    //console.log(arrayName);
  //   let section = this.props.SectionData.section.sectionList;
  //   let videoNameList = null;
  //   let arrayNameVideo = [];
  //   let arraySectionName = [];
  //   for(let i = 0 ; i<section.length; i++){
  //     //console.log(section[i].section_name);
  //     //return <Chapters sectionName = {this.section[i].section_name}/>
  //     arraySectionName.push(section[i].section_name);
  //     for(let k = 0; k<section[i].list_video.length; k++){
  //         //console.log(section[i].list_video[k].video_name);
  //         arrayNameVideo.push(section[i].list_video[k].video_name)
  //     }
  //   }
  //   //console.log(arraySectionName);
  //  // console.log(arrayNameVideo);
  //   videoNameList = arrayNameVideo.map(element =>{
  //     return <Video key={element} videoName={element}/>
  //   })
  //Cua Hieu
    return <div><Video videoName ={this.props.videoName}/></div>;
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
