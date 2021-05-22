import React from 'react';

import './NavigationItems.css';
import NavigationItems from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItems link="/" active>Builder</NavigationItems>
        <NavigationItems >Checkout</NavigationItems>
    </ul>
);

export default navigationItems;