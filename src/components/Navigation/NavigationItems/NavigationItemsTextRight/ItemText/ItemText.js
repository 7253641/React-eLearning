import React from 'react';
import { NavLink } from 'react-router-dom';

// import SubMenuItem from './SubMenuItem/SubMenuItem';
// import classes from '../NavigationItemsTextRight.css';

const itemText = (props) => (
    <li>
        <NavLink
            to={props.link}
            exact={props.exact}>{props.children}</NavLink>
    </li>
);

export default itemText;
