import React, { Component } from 'react';

import classes from './SingleCourse.css';
import Aux from '../../hoc/AuxReact/AuxReact';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import CategoryImage from '../../assets/images/icon-category-grey.svg';
import PlayIcon from '../../assets/images/icon-play.svg';
import StudentIcon from '../../assets/images/icon-availability.svg';
import LevelIcon from '../../assets/images/icon-level.svg';
import DurationIcon from '../../assets/images/icon-clock-grey.svg';
import PriceIcon from '../../assets/images/icon-card-grey.svg';

class SingleCourse extends Component {
    state = {
        detailCourse: {
            title: 'Java Spring',
            imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
            student: 1092,
            level: 'Medium',
            duration: 32,
            price: 100,
            category: 'Web Service',
            author: 'Spectre',
            avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
            description: "Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ligula libero, feugiat faucibus mattis eget, pulvinar et ligula.",
            sectionList: [
                {
                    id: 1,
                    sectionName: 'Welcome to Spring Framework Master Class',
                    listVideo: [
                        {
                            id: 1,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                        {
                            id: 2,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                        {
                            id: 3,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                        {
                            id: 4,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                        {
                            id: 5,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                        {
                            id: 6,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                    ],
                },
                {
                    id: 2,
                    sectionName: 'Introduction to Spring Framework in 10 Steps',
                    listVideo: [
                        {
                            id: 1,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                        {
                            id: 2,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                        {
                            id: 3,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                        {
                            id: 4,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                        {
                            id: 5,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                        {
                            id: 6,
                            videoUrl: '#',
                            videoName: 'One Thing You Should Do',
                        },
                    ],
                }
            ],
            directories: ['Home', 'Courses', 'Java Spring']
        },
        cartAmount: '1'
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    imageUrl={this.state.detailCourse.imageUrl}
                    title={this.state.detailCourse.title}
                    cartAmount={this.state.cartAmount}
                    directories={this.state.detailCourse.directories}/>
                <div className={classes.Height50} />
                <div className={classes.SingleCourseSection}>
                    <div className={classes.SingleCourseContainer}>
                        <div className={classes.DetailCourseSection}>
                            <div className={classes.DetailCourseWrapper}>

                                <h1 className={classes.Title}>{this.state.detailCourse.title}</h1>
                                <div className={classes.Height20} />
                                <div className={classes.AuthorSection}>
                                    <div className={classes.AuthorWrapper}>
                                        <div className={classes.AuthorAvatar}>
                                            <img alt="MyIcon" className={classes.AvatarStyle} width="40" src={this.state.detailCourse.avatarUrl} />
                                        </div>
                                        <div className={classes.AuthorName} >
                                            <p>Teacher</p>
                                            <div className={classes.Height5} />
                                            <h5>{this.state.detailCourse.author}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.CategorySection}>
                                    <div className={classes.Height5} />
                                    <div className={classes.CategoryWrapper}>
                                        <div className={classes.CategoryIcon}>
                                            <img alt="MyIcon" style={{marginRight: '10px', marginTop: '5px'}} width="30" src={CategoryImage} />
                                        </div>
                                        <div className={classes.CategoryTitle}>
                                            <p>Category</p>
                                            <div className={classes.Height5} />
                                            <h5>{this.state.detailCourse.category}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.Height20} />
                                <div className={classes.ImageCourseSection}>
                                    <img alt="MyIcon" style={{width: '100%', float: 'left'}} src={this.state.detailCourse.imageUrl} />
                                    <div className={classes.Gradient}>
                                        <div className={classes.BookmarkAndCompareSection}>
                                            <a style={{marginRight: '20px'}}>BOOKMARK</a>
                                            <a>COMPARE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.Height40} />
                                <div className={classes.DescriptionAndVideosLinkSection}>
                                    <h3><strong>Course Description</strong></h3>
                                    <div className={classes.Height20}></div>
                                    <p>{this.state.detailCourse.description}</p>
                                    <div className={classes.Height40} />

                                    <h3><strong>Our Program</strong></h3>
                                    <div className={classes.Height30} />
                                    <div className={classes.VideosLinkSection}>
                                        {this.state.detailCourse.sectionList.map((section, index) => (
                                            <div key={section.id}>
                                                <h2>Section {index + 1}: <span>{section.sectionName}</span></h2>
                                                {section.listVideo.map((video, idex) => (
                                                    <div key={video.id} className={classes.VideosLinkTab}>
                                                        <div className={classes.VideoLinkTabLeft}>
                                                            <table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td><img alt="MyIcon" width="20" src={PlayIcon} /></td>
                                                                        <td><span className={classes.SpanStyle}>Video</span></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className={classes.VideoName}>
                                                            <h4>{video.videoName}</h4>
                                                        </div>
                                                        <div className={classes.PreviewButton}>
                                                            <a>PREVIEW</a>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className={classes.Height30} />
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className={classes.DetailCoursePlusSection}>
                            <div className={classes.DetailCoursePlusWrapper}>
                                <div className={classes.Height98} />
                                <table className={classes.TableStyle}>
                                    <tbody>
                                        <tr>
                                            <td><img alt="MyIcon" width="40" src={StudentIcon} /></td>
                                            <td>
                                                <h4>{this.state.detailCourse.student} Students</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img alt="MyIcon" width="40" src={LevelIcon} /></td>
                                            <td>
                                                <h4>Level: {this.state.detailCourse.level}</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img alt="MyIcon" width="40" src={DurationIcon} /></td>
                                            <td>
                                                <h4>Duration: {this.state.detailCourse.duration} Hours</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img alt="MyIcon" width="40" src={PriceIcon} /></td>
                                            <td>
                                                <h4>Price: {this.state.detailCourse.price} USD</h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={classes.Height70} />
            </Aux>
        );
    }
}

export default SingleCourse;
