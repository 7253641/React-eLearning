import React from 'react';

import BasicIcon from '../../../assets/images/icon-basic.svg';
import MediumIcon from '../../../assets/images/icon-medium.svg';
import AdvancedIcon from '../../../assets/images/icon-advanced.svg';

const iconLevel = (props) => {
    let inputElement = <div></div>;
    switch (props.levelType) {
        case ('basic'):
            inputElement = <img src={BasicIcon} width={props.widthSize} alt="MyIcon" />
            break;
        case ('medium'):
            inputElement = <img src={MediumIcon} width={props.widthSize} alt="MyIcon" />
            break;
        case ('advanced'):
            inputElement = <img src={AdvancedIcon} width={props.widthSize} alt="MyIcon" />
            break;
        default:
            inputElement = <img src={AdvancedIcon} width={props.widthSize} alt="MyIcon" />;
    };

    return (
        <div>
            {inputElement}
        </div>
    );
}

export default iconLevel;
