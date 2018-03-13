import React from 'react';

import SubNavigationItemsLeft from '../SubNavigationItemsLeft/SubNavigationItemsLeft';
import SubNavigationItemsRight from '../SubNavigationItemsRight/SubNavigationItemsRight';
import classes from './SubToolbar.css';

const subToolbar = (props) => (
    <div className={classes.SubToolBarSection}>
        <div className={classes.SubToolbar}>
                <SubNavigationItemsLeft submenu={props.submenuInit}></SubNavigationItemsLeft>
                <SubNavigationItemsRight></SubNavigationItemsRight>
        </div>
    </div>
);

export default subToolbar;
