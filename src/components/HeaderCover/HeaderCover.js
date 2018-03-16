import React from 'react';

import HeaderHompage from './HeaderHomepage/HeaderHomepage';
import HeaderOfOther from './HeaderOfOther/HeaderOfOther';

const headerCover = (props) => {
    let component = null;
    if (props.isHomepage) {
        component = <HeaderHompage imageUrl={props.imageUrl}/>
    } else {
        component = <HeaderOfOther title={props.title} imageUrl={props.imageUrl} directories={props.directories}/>
    }

    return (
        <div>
            {component}
        </div>
    );
}

export default headerCover;
