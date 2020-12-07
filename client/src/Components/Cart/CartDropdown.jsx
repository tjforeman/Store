import React from 'react';

import CustomButton from '../Custom-button/CustomButton';

import './cart-dropdown.scss';

const CartDropdown = () => {
    return (
        <div className = 'cart-dropdown'>
            <div className = 'cart-items'></div>
            <CustomButton>GO tO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropdown;