import React from 'react';

import classes from './Footer.css';
import LogoIcon from '../../assets/images/logo.svg';
import FacebookIcon from '../../assets/images/icon-facebook-circle.svg';
import TwitterIcon from '../../assets/images/icon-twitter-circle.svg';
import LinkedinIcon from '../../assets/images/icon-linkedin-circle.svg';
import YoutubeIcon from '../../assets/images/icon-youtube-circle.svg';

const footer = (props) => (
    <div className={classes.FooterSection}>
        <div className={classes.FooterPanel}>
            <div className={classes.Height50} />
            <div className={classes.FooterPanelClearfix}>
                <div className={classes.FooterPanelResponsive}>
                    <div className={classes.LogoSection}>
                        <a><img alt="MyIcon" width="200" src={LogoIcon} /></a>
                    </div>
                    <div className={classes.Height20} />
                    <div className={classes.SocialSection}>
                        <a><img alt="MyIcon" className={classes.Icon} src={FacebookIcon} /></a>
                        <a><img alt="MyIcon" className={classes.Icon} src={TwitterIcon} /></a>
                        <a><img alt="MyIcon" className={classes.Icon} src={LinkedinIcon} /></a>
                        <a><img alt="MyIcon" width="40" src={YoutubeIcon} /></a>
                    </div>
                </div>
            </div>
            <div className={classes.Height50} />
        </div>
        <div className={classes.FooterToolbar}>
            <div className={classes.Toolbar}>
                <div className={classes.CopyrightSection} >
                    <p className={classes.CopyrightText}>© Copyright 2018 e-Learning</p>
                </div>
            </div>
        </div>
    </div>
);

export default footer;
