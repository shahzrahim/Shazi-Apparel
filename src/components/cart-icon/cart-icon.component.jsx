import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';

import './cart-icon.styles.scss'

export const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)
