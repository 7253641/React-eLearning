import React from 'react';

import classes from './HeaderHompage.css';
import IconLevel from '../../UI/IconLevel/IconLevel';
import '../../../assets/css/Tooltip.css';

const headerHompage = (props) => {
    const headerSectionStyle = {
        backgroundImage: 'url(' + props.imageUrl +')'
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
                                <a className="hint--elearning" data-hint="Basic Courses"><IconLevel levelType="basic" widthSize={33} /></a>
                            </div>
                            <div className={classes.LevelWrapper} style={mediumLevel}>
                                <a className="hint--elearning" data-hint="Medium Courses"><IconLevel levelType="medium" widthSize={33} /></a>
                            </div>
                            <div className={classes.LevelWrapper} style={advancedLevel}>
                                <a className="hint--elearning" data-hint="Advanced Courses"><IconLevel levelType="advanced" widthSize={33} /></a>
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
