import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.scss";

import FormInput from "../Form-input/FormInput";
import CustomButton from "../Custom-button/CustomButton";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../Redux/user/user.actions";

const SignIn = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = props;
    const { email, password } = userCredentials;

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={userCredentials.email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          label="password"
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            SIGN IN{" "}
          </CustomButton>
          <CustomButton
            type="button"
            onClick={props.googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
