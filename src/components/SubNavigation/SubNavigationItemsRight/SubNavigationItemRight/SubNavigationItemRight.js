import React from 'react';

const subNavigationItemRight = (props) => (
    <li>
        <img src={props.icon} alt="MyIcon" />
        <a>{props.children}</a>
    </li>
);

export default subNavigationItemRight;
