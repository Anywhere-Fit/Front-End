import './App.css';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import React, { useState } from 'react';

// Created initial form values for Login Page
const initialLoginFormValues = {
  username: '',
  password: '',
}

// Created initial form values for SignUp Page
const initialSignUpFormValues = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
}


function App() {

// Created state for SignUp form values
 const [ signUpFormValues, setSignUpFormValues ] = useState(initialSignUpFormValues)

//  Created state for Login form values
 const [ loginFormValues, setLoginFormValues ] = useState(initialLoginFormValues)
  
  return (
    <div className="App">
      <h1>Welcome to Anywhere Fitness!!</h1>
      <SignUpPage/>
    </div>
  );
}

export default App;
