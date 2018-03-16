import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/AuxReact/AuxReact';
import HeaderCover from '../../HeaderCover/HeaderCover';

const toolbar = (props) => (
    <Aux>
        <div className={classes.Relative}>
            <div className={classes.ToolbarSection}>
                <div className={classes.Toolbar}>
                    <div className={classes.ItemsSection}>
                        <div className={classes.Height10} />
                            <div className={classes.LogoBlock} >
                                <a><Logo /></a>
                            </div>
                            <NavigationItems cartAmount={props.cartAmount}/>
                        <div className={classes.Height10} />
                    </div>
                </div>
            </div>
        </div>
        <HeaderCover isHomepage={props.homepage} imageUrl={props.imageUrl} title={props.title} directories={props.directories}/>
    </Aux>

);

export default toolbar;
