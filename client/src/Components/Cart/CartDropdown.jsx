import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../Custom-button/CustomButton';
import CartItem from '../Cart-Item/CartItem'
import {selectCartItems} from '../../Redux/cart/cart.selectors';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) => {
    return (
        <div className = 'cart-dropdown'>
            <div className = 'cart-items'>
                {
                    cartItems.map(cartItem => 
                    <CartItem key ={cartItem.id} item={cartItem} /> 
                    )}
            </div>
            <CustomButton>GO tO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);