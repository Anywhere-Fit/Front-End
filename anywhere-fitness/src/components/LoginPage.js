

import React, { useState }  from 'react'
import axios from "axios";
import { useHistory } from "react-router";

// Created initial form values for Login Page
const initialLoginFormValues = {
    username: '',
    password: '',
  }
  

const LoginPage = () => {
  const [loginFormValues, setLoginFormValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginFormValues({
      ...loginFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://team-anywhere-fitness.herokuapp.com/api/users/login", loginFormValues)
      .then((res) => {
        console.log("login resp", res, res.data);
        localStorage.setItem("token", res.data);
        useHistory.push("/dashboard");
      })
      .catch((error) => console.log({ error }));
  };

  return (
    <div id="loginPage">
      Login Page
      <form onSubmit={login}>
        <label>Username: </label>
        <input type="text" name="username" value={loginFormValues.username} onChange={handleChange} />
        <br />

        <label>Password: </label>
        <input type="password" name="password" value={loginFormValues.password} onChange={handleChange} />
        <br />
=======
    //  Created state for Login form values
    const [ loginFormValues, setLoginFormValues ] = useState(initialLoginFormValues)

    // Temporary state to test login attempts
    const [ loginAttempts, setLoginAttempts ] = useState([])

    // Created an update form values function for the Login page
    const updateLoginForm = (inputName, inputValue) => {
        setLoginFormValues({ ...loginFormValues, [inputName]: inputValue })
      }

    // Created an onChange handler for the Login page
    const onChangeLoginForm = event => {
        const { name, value } = event.target
        updateLoginForm(name, value)
    }

    // Created a submit form function for the Login form
    const submitLoginForm = () => {
        const newLoginAttempt = {
            username: loginFormValues.username,
            password: loginFormValues.password,
        }

        setLoginAttempts([newLoginAttempt, ...loginAttempts])
        setLoginFormValues(initialLoginFormValues)
    }

    const onSubmitLogin = (e) => {
        e.preventDefault()
        submitLoginForm()
    }


    return (
        <div id='loginPage'>
            Login Page

            <form onSubmit={onSubmitLogin}>
                <label>Username: </label>
                    <input
                    type='text'
                    name='username'
                    onChange={onChangeLoginForm}
                    value={loginFormValues.username}
                    /><br/>

                <label>Password: </label>
                    <input
                    type='password'
                    name='password'
                    onChange={onChangeLoginForm}
                    value={loginFormValues.password}
                    /><br/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
