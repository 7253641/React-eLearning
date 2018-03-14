import React from 'react';

import classes from './HeaderOfOther.css';
import DirectoryBar from './DirectoryBar/DirectoryBar';

const headerOfOther = (props) => {
    const headerSectionStyle = {
        backgroundImage: 'url(' + props.imageUrl +')'
    }
    return (
        <div>
            <div className={classes.HeaderOfOtherSection} style={headerSectionStyle}>
                <div className={classes.Gradient}>
                    <div className={classes.HeaderOfOtherContainer} >
                        <div className={classes.Height200} />
                        <div className={classes.TitleHeader}>
                            <strong>{props.title}</strong>
                            <div className={classes.Height20} />
                            <div className={classes.Height20} />
                        </div>
                    </div>
                </div>
            </div>
            <DirectoryBar directories={props.directories}/>
        </div>
    );
}

export default headerOfOther;
