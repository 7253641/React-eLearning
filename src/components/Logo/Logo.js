import React from 'react';

import elearningLogo from '../../assets/images/logo.svg';
import classes from './Logo.css';

const logo = (props) => (
    <img className={classes.Logo} src={elearningLogo} alt="MyLogo" />
);

export default logo;
