import React from 'react';

import ItemText from './ItemText/ItemText';
import classes from './NavigationItemsTextRight.css';

const navigationItemsTextRight = (props) => (
    <div className={classes.NavigationItemsTextRight}>
        <ul>
            <ItemText link="/">HOME</ItemText>
            <ItemText link="/courses" exact>COURSES</ItemText>
            <ItemText link="">CONTACT</ItemText>
        </ul>
    </div>
);

export default navigationItemsTextRight;
