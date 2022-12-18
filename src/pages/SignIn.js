import React, { useState } from "react";

import OtherMethods from "../components/OtherMethods";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormHeader from "../components/FormHeader";

import {auth} from '../config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

import {useNavigate} from 'react-router-dom'


import './signin.css'

const SignIn = (props) => {
    return (
        <div id="loginform">
        <FormHeader title="Sign In" />
        <Form />
        <OtherMethods />
        <AccountSignUp />
      </div>
      );
};

const AccountSignUp = (props) => (
    <div id="signup">
        <label>Dosnt have an account? <a href="/signup">SignUp</a></label>
    </div>
)

const Form = props => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');
    const login = e => {
        e.preventDefault()
        console.log('login')
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user)
          localStorage.setItem('token', userCredential.user.accessToken)
          navigate('/home',{ state: { email : userCredential.user.email } })
        })
        .catch(err => {
          console.log(err.message)
          setErrorMessage(err.message)
        })
      }
    return (
   <div>
     <FormInput id="email" description="Username" placeholder="Enter your username" type="text" />
     <FormInput id="password" description="Password" placeholder="Enter your password" type="password"/>
     <p className="error">{errorMessage} </p>
     <FormButton onclick={login} title="Log in"/>
   </div>
)};




export default SignIn;