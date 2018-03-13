import React from 'react';

import ItemText from './ItemText/ItemText';
import classes from './NavigationItemsTextRight.css';

const navigationItemsTextRight = (props) => (
    <div className={classes.NavigationItemsTextRight}>
        <ul>
            <ItemText>HOME</ItemText>
            <ItemText>COURSES</ItemText>
            <ItemText>CONTACT</ItemText>
        </ul>
    </div>
);

export default navigationItemsTextRight;
