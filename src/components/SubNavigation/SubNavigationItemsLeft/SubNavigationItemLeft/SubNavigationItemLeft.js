import React from 'react';

import SubMenu from './SubMenu/SubMenu';
import classes from '../SubNavigationItemsLeft.css';

const subNavigationItem = (props) => {
    let subMenuItems = null;
    if (props.submenuItems) {
        subMenuItems = (
            <ul className={classes.SubMenu}>
                {props.submenuItems.map( (item, index) => (
                    <SubMenu key={index} >{item}</SubMenu>
                ))}
            </ul>
        );
    }

    return (
        <li>
            <img src={props.icon} alt="MyIcon" />
            <a>{props.children}</a>
            {subMenuItems}
        </li>
    );
}

export default subNavigationItem;
