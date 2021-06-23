import './App.css';
import React, { useEffect, useState } from "react";
import ClassEditForm from './components/ClassEditForm'
import ClassAddForm from './components/ClassAddForm'
import axios from 'axios';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

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
<<<<<<< HEAD
      <header className="App-header">
       <h1>Welcome to Anywhere Fintness!!</h1> 
      </header>
=======
      <h1>Welcome to Anywhere Fitness!!</h1>
      <SignUpPage/>
>>>>>>> main
    </div>
  );
}

export default App;
