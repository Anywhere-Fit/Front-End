import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

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

        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
