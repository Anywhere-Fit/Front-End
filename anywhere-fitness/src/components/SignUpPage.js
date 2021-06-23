
import React, { useState }  from 'react'
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";



// Created initial form values for SignUp Page
const initialSignUpFormValues = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  }

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
    <div id="signUpPage">
      SignUp Page
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

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignUpPage;


    // Created state for SignUp form values
    const [ signUpFormValues, setSignUpFormValues ] = useState(initialSignUpFormValues)

    // Created a temporary state to hold the signed up members 
    const [ members, setMembers ] = useState([])

    // Created an update form values function for the SignUp page
    const updateSignUpForm = (inputName, inputValue) => {
        setSignUpFormValues({ ...signUpFormValues, [inputName]: inputValue })
      }

    // Created an onChange handler for the SignUp page
      const onChangeSignUpForm = event => {
        const { name, value } = event.target
        updateSignUpForm(name, value)
    }

    // Created a submit form function for the SignUp form
    const submitSignUpForm = () => {
        const newMember = {
            firstName: signUpFormValues.firstName,
            lastName: signUpFormValues.lastName,
            username: signUpFormValues.username,
            password: signUpFormValues.password,
        }

        setMembers([newMember, ...members])
        setSignUpFormValues(initialSignUpFormValues)
    }

    const onSubmitSignUp = (e) => {
        e.preventDefault()
        submitSignUpForm()
    }

    return (
        <div id='signUpPage'>
            SignUp Page

            <form onSubmit={onSubmitSignUp}>
                <label>First Name: </label>
                    <input
                    type='text'
                    name='firstName'
                    onChange={onChangeSignUpForm}
                    value={signUpFormValues.firstName}
                    /><br/>

                <label>Last Name: </label>
                    <input
                    type='text'
                    name='lastName'
                    onChange={onChangeSignUpForm}
                    value={signUpFormValues.lastName}
                    /><br/>

                <label>Username: </label>
                    <input
                    type='text'
                    name='username'
                    onChange={onChangeSignUpForm}
                    value={signUpFormValues.username}
                    /><br/>

                <label>Password: </label>
                    <input
                    type='password'
                    name='password'
                    onChange={onChangeSignUpForm}
                    value={signUpFormValues.password}
                    /><br/>

                    <button>Register</button>
            </form>
        </div>
    )
}

export default SignUpPage

