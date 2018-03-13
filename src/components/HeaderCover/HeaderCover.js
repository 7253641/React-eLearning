import React from 'react';

import HeaderHompage from './HeaderHomepage/HeaderHomepage';

const headerCover = (props) => {
    let component = null;
    if (props.isHomepage) {
        component = <HeaderHompage ImageUrl={'https://i.imgur.com/793X3RJ.jpg'}/>
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
