import React from 'react';
import '../../assets/css/Tooltip.css';

import classes from './Course.css';
import IconHeart from '../../assets/images/icon-heart.svg';
import IconCompare from '../../assets/images/icon-compare.svg';
import IconCalendar from '../../assets/images/icon-calendar.svg';
import IconClock from '../../assets/images/icon-clock.svg';

const course = (props) => {
    return (
        <div className={classes.CourseSectionPosition}>
            <div className={classes.CourseSection}>
                <div className={classes.CourseContainer}>
                    <div className={classes.ImageSection}>
                        <img className={classes.CourseImageStyle} src={props.imageUrl} alt="MyIcon" />
                        <div className={classes.Gradient}>
                            <a className="hint--elearing" data-hint="Add To Favorities" style={{position: 'absolute', right: 0}}>
                                <img alt="MyIcon" style={{marginRight: '60px'}} width="25" src={IconHeart} />
                            </a>
                            <a className="hint--elearing" data-hint="Add To Compare" style={{position: 'absolute', right: 0}}>
                                <img alt="MyIcon" style={{marginRight: '20px'}} width="25" src={IconCompare} />
                            </a>
                            <div className={classes.BottomInfoSection}>
                                <div className={classes.BottomInfo}>
                                    <img alt="MyIcon" className={classes.ImageStyle} width="20" src={IconCalendar} />
                                    <p className={classes.TextStyle}>{props.lastUpdated}</p>
                                    <img alt="MyIcon" className={classes.ImageStyle} style={{marginLeft: '20px'}} width="20" src={IconClock} />
                                    <p className={classes.TextStyle}>{props.courseTime} Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.Description}>
                        <h3><a className={classes.Title}>{props.courseTitle}</a></h3>
                        <div className={classes.Height20} />
                        <p><a className={classes.DescriptionText}>{props.courseDescription}</a></p>
                    </div>
                    <div className={classes.DetailCourseSection}>
                        <div className={classes.AuthorSection} >
                            <div className={classes.AuthorContainer}>
                                <img alt="MyIcon" className={classes.AuthorImage} width="25" src={props.authorAvatarUrl} />
                                <p className={classes.AuthorName}><a>{props.authorName}</a></p>
                            </div>
                        </div>
                        <div className={classes.AuthorSection} >
                            <div className={classes.AuthorContainer}>
                                <img alt="MyIcon" className={classes.AuthorImage} width="25" style={{opacity: 0}} src={props.authorAvatarUrl} />
                            </div>
                        </div>
                        <div className={classes.PriceSection} >
                            <a className={classes.PriceStyle}>{props.price} USD</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default course;
