import React, { Component } from 'react';

import './sign-in.scss'

import FormInput from '../Form-input/FormInput';
import CustomButton from '../Custom-button/CustomButton'


class SignIn extends Component {
    constructor(props){
    super(props);
    
    this.state = {
        email: '',
        password: ''
    }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState ({[name]: value})
    }
    render() {
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <FormInput 
                    name ='email'
                    type = 'email' 
                    value = {this.state.email} 
                    label = 'email'
                    handleChange = {this.handleChange}
                    required />
                    <FormInput
                    name = 'password'
                    type = 'password'
                    value = {this.state.password}
                    label = 'password'
                    handleChange = {this.handleChange} 
                    required/>
                    

                    <CustomButton type = 'submit' value = 'Submit Form'>SIGN IN </CustomButton>
                </form>
                
            </div>
        );
    }
}

export default SignIn;