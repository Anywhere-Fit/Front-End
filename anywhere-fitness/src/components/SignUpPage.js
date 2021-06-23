import React, { useState }  from 'react'
import Styled from 'styled-components'


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
    

`

// Created initial form values for SignUp Page
const initialSignUpFormValues = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  }

const SignUpPage = () => {

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
        <StyledSignUpPage id='signUpPage'>
            <h2>Register for Anywhere Fitness</h2>

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
        </StyledSignUpPage>
    )
}

export default SignUpPage