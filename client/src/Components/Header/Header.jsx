import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {auth} from '../../Firebase/firebase.utils';

import './Header.scss';

const Header = ({currentUser}) => {
    return (
        <div className = 'header'>
            <Link to ='/'>
                <Logo className = 'logo' />
            </Link>
            <div className = 'options'>
                <Link className = 'option' to = '/shop'>
                    SHOP
                </Link>
                <Link className = 'option' to = '/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className = 'option' onClick = {() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className = 'option' to ='sign-in'>SIGN IN</Link>
                }
            </div>
        </div>
    );
};

export default Header;