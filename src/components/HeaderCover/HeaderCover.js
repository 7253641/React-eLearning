import React from 'react';

import HeaderHompage from './HeaderHomepage/HeaderHomepage';

const headerCover = (props) => {
    let component = null;
    if (props.isHomepage) {
        component = <HeaderHompage ImageUrl={props.imageUrl}/>
    } else {
        component = (
            <div>

            </div>
        );
    }

    return (
        <div>
            {component}
        </div>
    );
}

export default headerCover;
