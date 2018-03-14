import React from 'react';

import classes from './DirectoryBar.css';
import IconNext from '../../../../assets/images/icon-next.svg';
import Aux from '../../../../hoc/Aux/Aux';

const directoryBar = (props) => {
    return (
        <div className={classes.Section}>
            <div className={classes.SectionClearfix}>
                <div className={classes.Container}>
                    {props.directories.map((directory, index) => (
                        <Aux key={index}>
                            <a>{directory}</a>
                            <img className={classes.Image} width="10" alt="MyIcon" src={IconNext} />
                        </Aux>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default directoryBar;
