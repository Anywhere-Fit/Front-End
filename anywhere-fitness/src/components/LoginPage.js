import React, { useState }  from 'react'


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
    )
}

export default LoginPage