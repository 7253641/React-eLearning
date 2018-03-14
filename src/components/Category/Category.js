import React from 'react';
import '../../assets/css/Tooltip.css';

import classes from './Category.css';
import IconLevel from '../UI/IconLevel/IconLevel'

const category = (props) => {
    let dataHint = null;
    let iconLevelBackgroundColor = null;
    switch (props.levelType) {
        case ('basic'):
            iconLevelBackgroundColor = {backgroundColor: '#ff6f58'}
            dataHint = "Basic Courses"
            break;
        case ('medium'):
            iconLevelBackgroundColor = {backgroundColor: '#49c4af'}
            dataHint = "Medium Courses"
            break;
        case ('advanced'):
            iconLevelBackgroundColor = {backgroundColor: '#ffb72f'}
            dataHint = "Advanced Courses"
            break;
        default:
            iconLevelBackgroundColor = null
    }

    return (
        <div className={props.isBig ? classes.CategorySectionBig : classes.CategorySectionSmall}>
            <div className={classes.CardItemWrapper}>
                <div className={classes.CardItem}>
                    <img className={classes.CardItemImage} alt="MyImage" src={props.imageUrl} />
                    <a className={classes.Amount}>{props.amount}</a>
                    <div className={classes.DecriptionSection}>
                        <div className={classes.DecriptionWrapper}>
                            <div className={classes.Wrapper} >
                                <div className={classes.IconLevelWrapper} style={iconLevelBackgroundColor}>
                                    <a className="hint--elearning" style={{height: '20px', verticalAlign: 'middle'}} data-hint={dataHint}><IconLevel levelType={props.levelType} widthSize={20} /></a>
                                </div>
                                <h4><a className={classes.CategoryName}>{props.categoryName}</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default category;
