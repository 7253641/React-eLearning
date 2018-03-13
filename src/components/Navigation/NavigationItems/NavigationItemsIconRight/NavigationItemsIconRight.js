import React from 'react';

import classes from './NavigationItemsIconRight.css'
import CartIcon from '../../../../assets/images/icon-cart.svg';
import SearchIcon from '../../../../assets/images/icon-search.svg';
import MenuIcon from '../../../../assets/images/icon-menu.svg';

const navigationItemsIconRight = (props) => (
    <div className={classes.NavigationItemsIconRightBlock} >
        <div className={classes.Height20} />
        <div className={classes.NavigationItemsIconRight}>
            <a><img className={classes.MenuImg} src={MenuIcon} alt="MyIcon"/></a>
            <div className={classes.CartBlock} >
                <a><img className={classes.CartImg} src={CartIcon} alt="MyIcon"/></a>
                <a className={classes.CartAmount}>{props.amount}</a>
            </div>
            <a><img className={classes.SearchImg} src={SearchIcon} alt="MyIcon"/></a>
        </div>
    </div>
);

export default navigationItemsIconRight;
