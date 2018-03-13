import React from 'react';

import classes from './HeaderHompage.css';
import BasicIcon from '../../../assets/images/icon-basic.svg';
import MediumIcon from '../../../assets/images/icon-medium.svg';
import AdvancedIcon from '../../../assets/images/icon-advanced.svg';

const headerHompage = (props) => {
    const headerSectionStyle = {
        backgroundImage: 'url(' + props.ImageUrl +')'
    }
    const basicLevel = {
        backgroundColor: '#ff6f58'
    }
    const mediumLevel = {
        backgroundColor: '#49c4af'
    }
    const advancedLevel = {
        backgroundColor: '#ffb72f'
    }
    return (
        <div className={classes.HeaderSection} style={headerSectionStyle}>
            <div className={classes.BackgroundRadient}>
                <div className={classes.HeaderHompageWrapper}>
                    <div className={classes.Height250} />
                    <div className={classes.HeaderHompage}>
                        <strong className={classes.HeaderText1}>Find the Best Courses</strong>
                        <div className={classes.Height30} />
                        <h3 className={classes.HeaderText2}>All the top courses – from our school and the best our teachers.</h3>
                        <div className={classes.Height60} />
                        <div className={classes.SearchSection}>
                            <div className={classes.InputWrapper}>
                                <input className={classes.Input} type="text" placeholder="Keyword"/>
                            </div>
                            <div className={classes.InputWrapper}>
                                <input className={classes.Input} type="text" placeholder="Category" />
                            </div>
                            <div className={classes.InputWrapper}>
                                <input className={classes.Input} type="text" placeholder="Level" />
                            </div>
                        </div>
                        <div className={classes.Height40}></div>
                        <div className={classes.ButtonSection}>
                            <div className={classes.ButtonWrapper}>
                                <a className={classes.Button}>SEARCH COURSES</a>
                            </div>
                        </div>
                        <div className={classes.Height150} />
                        <div className={classes.LevelSection} >
                            <div className={classes.LevelWrapper} style={basicLevel}>
                                <a className={classes.Level} title="Basic Courses"><img src={BasicIcon} width="33" alt="MyIcon" /></a>
                            </div>
                            <div className={classes.LevelWrapper} style={mediumLevel}>
                                <a className={classes.Level} title="Medium Courses"><img src={MediumIcon} width="33" alt="MyIcon" /></a>
                            </div>
                            <div className={classes.LevelWrapper} style={advancedLevel}>
                                <a className={classes.Level} title="Advanced Courses"><img src={AdvancedIcon} width="33" alt="MyIcon" /></a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.Height20} />
                </div>
                <div className={classes.Height50} />
            </div>
        </div>
    );
}

export default headerHompage;
