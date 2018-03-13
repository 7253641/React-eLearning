import React from 'react';

import SubNavigationItemRight from './SubNavigationItemRight/SubNavigationItemRight';
import LoginIcon from '../../../assets/images/icon-login.svg';
import RegisterIcon from '../../../assets/images/icon-register.svg';
import classes from './SubNavigationItemsRight.css';

const subNavigationItemsRight = (props) => (
    <div className={classes.SubNavigationItemsRight}>
        <div className={classes.SubNavigationItemRight}>
            <ul>
                <SubNavigationItemRight icon={LoginIcon}>LOGIN</SubNavigationItemRight>
                <SubNavigationItemRight icon={RegisterIcon}>REGISTER</SubNavigationItemRight>
            </ul>
        </div>
    </div>
);

export default subNavigationItemsRight;
