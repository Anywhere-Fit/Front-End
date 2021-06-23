import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClassEditForm from './components/ClassEditForm'
import ClassAddForm from './components/ClassAddForm'
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

    <div className="App">

      {/* <h1>Welcome to Anywhere Fitness!!</h1>
      <SignUpPage/> */}


   
    <Router>
      <div className="App">
        <h1>Welcome to Anywhere Fitness!!</h1>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <SignUpPage />
        </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
