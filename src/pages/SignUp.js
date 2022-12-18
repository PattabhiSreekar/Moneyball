import React, { useState } from "react";

import OtherMethods from "../components/OtherMethods";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormHeader from "../components/FormHeader";

import {auth} from '../config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

import {useNavigate} from 'react-router-dom'


import './signin.css'

const SignUp = (props) => {

  
    return (
        <div id="loginform">
        <FormHeader title="Sign UP" />
        <Form />
        <OtherMethods />
      </div>
      );
};

const Form = props => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('');
  const register = e => {
    e.preventDefault()
    console.log('cliock ')
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(password.length > 8) {
      // Create a new user with email and password using firebase
      
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          
            console.log(res.user)
            localStorage.setItem('token', res.user.accessToken)
          navigate('/teams',{ state: { email : res.user.email } })
          })
        .catch(err => {
          setErrorMessage(err.message)
          console.log(err.message)
        })
    }
    else {
      console.log('password')
      setErrorMessage('Password should atleast be 8 characters')
    }
  }

  return (
    <div>
      <FormInput id="email" description="Username" placeholder="Enter your username" type="text" />
      <FormInput id="password" description="Password" placeholder="Enter your password" type="password"/>
      <p className="error">{errorMessage} </p>
      <FormButton onclick={register} title="Sign Up"/>
      <AccountSignIn/>
    </div>
 )};

 const AccountSignIn = (props) => (
  <div id="signup">
      <label>Already have an account? <a href="/">Sign In</a></label>
  </div>
)

 



export default SignUp;