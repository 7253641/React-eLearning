import React from 'react';

import NavigationItemsIconRight from './NavigationItemsIconRight/NavigationItemsIconRight';
import NavigationItemsTextRight from './NavigationItemsTextRight/NavigationItemsTextRight';

const navigationItems = (props) => (
    <div>
        <NavigationItemsIconRight amount={props.cartAmount}/>
        <NavigationItemsTextRight />
    </div>
);

export default navigationItems;
