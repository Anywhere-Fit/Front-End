import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Styled from "styled-components";


// Styling for the Login page
const StyledLoginPage = Styled.div`
    border: 2px solid black;
    border-radius: 40px;
    width: 60%;
    margin: 2% auto 2% auto;
    padding: 3%;
    background-color: beige;

    input {
        margin: 2%;
        font-size: 120%;
    }   
`;

// Created initial form values for Login Page
const LoginPage = () => {

  const { push } = useHistory();

  const [loginFormValues, setLoginFormValues] = useState({
    username: "",
    password: "",
    authCode:"steakOnAMonday",
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
      .post("https://fitnessapplambda5.herokuapp.com/api/auth/login", loginFormValues)
      .then((res) => {
        console.log("login resp:", res.data.token);
        localStorage.setItem("token", res.data.token);
        push("/classlist");
      })
      .catch((error) => console.log({ error }));
  };

  return (
    <StyledLoginPage id="loginPage">
      <h2>Login to Access Classes</h2>

      <form onSubmit={login}>
        <label>Username: </label>
        <input type="text" name="username" onChange={handleChange} value={loginFormValues.username} />
        <br />

        <label>Password: </label>
        <input type="password" name="password" onChange={handleChange} value={loginFormValues.password} />
        <br />

        <button>Login</button>
      </form>
    </StyledLoginPage>
  );
};

export default LoginPage;
