import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../Checkout-item/CheckoutItem';

import { selectCartItems,selectCartTotal } from '../../Redux/cart/cart.selectors';
import StripeButton from '../stripe-button/StripeButton';

import './checkout.scss';

const Checkout = ({cartItems, total}) => {
    return (
        <div className = 'checkout-page'>
            <div className = 'checkout-header'>
                <div className = 'header-block'>
                    <span>Product</span>
                </div>
                <div className = 'header-block'>
                    <span>Description</span>
                </div>
                <div className = 'header-block'>
                    <span>Quantity</span>
                </div>
                <div className = 'header-block'>
                    <span>Price</span>
                </div>
                <div className = 'header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>(
                    <CheckoutItem key = {cartItem.id} cartItem = {cartItem} />
                ))
            }
            <div className = 'total'>
                TOTAL: ${total}
                </div>
                <StripeButton price = {total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(Checkout);