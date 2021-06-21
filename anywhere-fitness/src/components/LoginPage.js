import React from 'react'


const LoginPage = () => {

    return (
        <div>
            Login Page

            <form>
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

                    <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage