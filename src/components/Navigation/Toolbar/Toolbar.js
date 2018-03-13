import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <div className={classes.Relative}>
        <div className={classes.ToolbarSection}>
            <div className={classes.Toolbar}>
                <div className={classes.ItemsSection}>
                    <div className={classes.Height10} />
                        <div className={classes.LogoBlock} >
                            <a><Logo /></a>
                        </div>
                        <NavigationItems />
                    <div className={classes.Height10} />
                </div>
            </div>
        </div>
    </div>
);

export default toolbar;
