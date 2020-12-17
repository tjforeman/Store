import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/firebase.utils";
import CartIcon from '../Cart-icon/CartIcon';
import CartDropdown from '../Cart/CartDropdown';
import {selectCurrentUser} from '../../Redux/user/user.selector';
import {selectCartHidden} from '../../Redux/cart/cart.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles'
const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer >
        <LogoContainer to="/" >
          <Logo  />
          </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink  to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to="/sign-in">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null :
        <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);
