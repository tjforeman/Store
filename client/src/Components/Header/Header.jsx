import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/firebase.utils";
import CartIcon from '../Cart-icon/CartIcon'
import CartDropdown from '../Cart/CartDropdown';

import "./Header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {
        hidden ? null :
        <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
