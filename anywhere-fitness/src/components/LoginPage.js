import React, { useState }  from 'react'
import Styled from 'styled-components'


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
    

`


// Created initial form values for Login Page
const initialLoginFormValues = {
    username: '',
    password: '',
  }
  

const LoginPage = () => {

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
        <StyledLoginPage id='loginPage'>
            <h2>Login to Access Classes</h2>

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
        </StyledLoginPage>
    )
}

export default LoginPage