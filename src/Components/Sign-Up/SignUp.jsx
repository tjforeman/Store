import React, { useState } from "react";

import FormInput from "../Form-input/FormInput";
import CustomButton from "../Custom-button/CustomButton";

import "./sign-up.scss";
import { auth, createUserProfileDocument } from "../../Firebase/firebase.utils";

const SignUp = () => {
  const [userCredentials,setUserCredentials] = useState({displayName: "",
  email: "",
  password: "",
  confirmPassword: "",})

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
  };

 const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({...userCredentials, [name]: value });
  };
 
    const { displayName, email, password, confirmPassword } = userCredentials;
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your Email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }

export default SignUp;
