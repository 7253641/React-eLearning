import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/Tooltip.css';

import classes from './Courses.css';
import IconSearch from '../../assets/images/icon-pen.svg';
import IconSetting from '../../assets/images/icon-settings.svg';
import IconList from '../../assets/images/icon-list.svg';
import IconGrid from '../../assets/images/icon-grid.svg';
import Course from '../../components/Course/Course';
import Aux from '../../hoc/AuxReact/AuxReact';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import axios from '../../axios-elearning';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class Courses extends Component {
    // state = {
    //     coursespage: {
    //         title: 'Courses',
    //         imageUrl: 'https://i.imgur.com/DCP0DZJ.png',
    //         directories: ['Home', 'Courses']
    //     },
    //     cartAmount: '1',
    //     courses: [
    //         {
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },
    //         {
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },
    //         {
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },{
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },{
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },{
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },
    //     ]
    // }

    componentDidMount() {
        this.props.onFetchCourses();
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    imageUrl={this.props.coursesPage.imageUrl}
                    title={this.props.coursesPage.title}
                    cartAmount={this.props.cartAmount}
                    directories={this.props.coursesPage.directories}/>
                <div className={classes.Height50} />
                <div className={classes.CoursesSection}>
                    <div className={classes.CoursesSectionClearfix}>
                            <div className={classes.SearchAndSettingSection}>
                                <div className={classes.SearchAndSettingContainer}>

                                        <div className={classes.SearchSection}>
                                            <div className={classes.Height20} />
                                            <div className={classes.InputSection}>
                                                <div className={classes.InputContainer}>
                                                    <img alt="Myicon" width="15" src={IconSearch} />
                                                    <input className={classes.InputStyle} type="text" placeholder="Keyword" />
                                                </div>
                                            </div>
                                            <div className={classes.SearchContainer}>
                                                <div className={classes.SearchButtonStyle}>
                                                    <a>SEARCH</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classes.SettingSection}>
                                            <div className={classes.Height20} />
                                            <div className={classes.SettingIconStyle}>
                                                <a className="hint--elearning" data-hint="Setting">
                                                    <img alt="MyIcon" className={classes.FloatLeft} width="23" src={IconSetting}/>
                                                </a>
                                            </div>
                                            <div className={classes.ListIconStyle}>
                                                <a className="hint--elearning" data-hint="List View">
                                                    <img alt="MyIcon" className={classes.FloatLeft} width="23" src={IconList}/>
                                                </a>
                                            </div>
                                            <div className={classes.GridIconStyle}>
                                                <a className="hint--elearning" data-hint="Grid View">
                                                    <img alt="MyIcon" className={classes.FloatLeft} width="23" src={IconGrid}/>
                                                </a>
                                            </div>
                                        </div>

                                </div>
                            </div>

                            <div className={classes.SectionWidth100Percentage}>
                                {this.props.courses.map((course, index) => (
                                        <Course
                                            key={index}
                                            courseId={course.id}
                                            imageUrl={'http://10.10.1.65/' + course.imageUrl}
                                            lastUpdated={'12/12/2018'}
                                            courseTime={8}
                                            courseTitle={course.courseName}
                                            courseDescription={course.description.substring(0, 130).trim() + '...'}
                                            authorAvatarUrl={'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png'}
                                            authorName={'Spectre'}
                                            price={course.price}
                                        />
                                ))}
                            </div>
                    </div>
                </div>
                <div className={classes.Height70} />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        courses: state.coursesData.courses,
        coursesPage: state.coursesData.coursesPage,
        cartAmount: state.coursesData.cartAmount
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCourses: () => dispatch(actions.fetchCourses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Courses, axios));
