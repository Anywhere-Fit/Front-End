import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Styled from "styled-components";

// Styling for the SignUp page
const StyledSignUpPage = Styled.div`
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
// Created initial form values for SignUp Page

const SignUpPage = () => {
  const [signUpFormValues, setSignUpFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignUpFormValues({
      ...signUpFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("https://team-anywhere-fitness.herokuapp.com/api/users/register", signUpFormValues)
      .then((resObj) => {
        console.log("signup res", resObj);
        useHistory.push("/login");
      })
      .catch((err) => console.log({ err }));
  };


  return (
    <StyledSignUpPage id="signUpPage">
      <h2>Register for Anywhere Fitness</h2>

      <form onSubmit={signup}>
        <label>First Name: </label>
        <input type="text" name="firstName" onChange={handleChange} value={signUpFormValues.firstName} />
        <br />

         <label>Last Name: </label>
         <input type="text" name="lastName" onChange={handleChange} value={signUpFormValues.lastName} />
         <br />

         <label>Username: </label>
         <input type="text" name="username" onChange={handleChange} value={signUpFormValues.username} />
         <br />
           
         <label>Password: </label>
         <input type="password" name="password" onChange={handleChange} value={signUpFormValues.password} />
        <br />

        <button>Register</button>
      </form>
    </StyledSignUpPage>
  );
};

export default SignUpPage;

