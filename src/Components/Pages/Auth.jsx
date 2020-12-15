import React from "react";

import  SignIn from '../Sign-in/SignIn'
import SignUp from '../Sign-Up/SignUp'

import "./Auth.scss";

const Auth = () => {
  return <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  
 </div>;
};

export default Auth;