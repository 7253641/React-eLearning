import React from 'react';

// import SubMenuItem from './SubMenuItem/SubMenuItem';
// import classes from '../NavigationItemsTextRight.css';

const itemText = (props) => (
    <li>
        <a>{props.children}</a>
        {/* <ul className={classes.SubMenu}>
            <SubMenuItem />
        </ul> */}
    </li>
);

export default itemText;
