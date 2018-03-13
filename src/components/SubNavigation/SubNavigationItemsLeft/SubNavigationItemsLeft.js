import React from 'react';

import SubNavigationItemLeft from './SubNavigationItemLeft/SubNavigationItemLeft';
import LanguagesIcon from '../../../assets/images/icon-world.svg';
import SocialIcon from '../../../assets/images/icon-share.svg';

import classes from './SubNavigationItemsLeft.css';

const subNavigationItemsLeft = (props) => (
    <div className={classes.SubNavigationItemsLeft}>
        <div className={classes.SubNavigationItemLeft}>
            <ul>
                <SubNavigationItemLeft
                    submenuItems={props.submenu.languages}
                    icon={LanguagesIcon}>LANGUAGES</SubNavigationItemLeft>
                <SubNavigationItemLeft
                    submenuItems={props.submenu.social}
                    icon={SocialIcon}>OUR SOCIAL</SubNavigationItemLeft>
            </ul>
        </div>
    </div>
);

export default subNavigationItemsLeft;
