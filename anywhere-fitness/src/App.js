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
  //Private Route is available for all pages within the app.
  return (
<<

    </div>
    <div className="App">

      <header className="App-header">
       <h1>Welcome to Anywhere Fintness!!</h1> 
      </header>

      <h1>Welcome to Anywhere Fitness!!</h1>
      <SignUpPage/>


        <div className="App">
      <h1>Welcome to Anywhere Fitness!!</h1>
 
    <Router>
      <div className="App">
        <h1>Welcome to Anywhere Fitness!!</h1>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <SignUpPage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
