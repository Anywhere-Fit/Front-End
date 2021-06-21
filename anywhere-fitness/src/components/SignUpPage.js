import React from 'react'


const SignUpPage = () => {

    return (
        <div id=''>
            SignUp Page

            <form>
                <label>First Name: </label>
                    <input
                    type='text'
                    name='firstName'
                    /><br/>

                <label>Last Name: </label>
                    <input
                    type='text'
                    name='lastName'
                    /><br/>

                <label>Username: </label>
                    <input
                    type='text'
                    name='username'
                    /><br/>

                <label>Password: </label>
                    <input
                    type='password'
                    name='password'
                    /><br/>

                    <button>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpPage