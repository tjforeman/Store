import React, { useState } from "react";

import "./sign-in.scss";

import FormInput from "../Form-input/FormInput";
import CustomButton from "../Custom-button/CustomButton";

import { auth, signInWithGoogle } from "../../Firebase/firebase.utils";

const SignIn = () => {
  const[auth, setAuth] = useState({email: '', password: ''})
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = auth

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setAuth({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setAuth({...auth, [name]: value });
  };
  
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={auth.email}
            label="email"
            handleChange={handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={auth.password}
            label="password"
            handleChange={handleChange}
            required
          />

          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              SIGN IN{" "}
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }

export default SignIn;
