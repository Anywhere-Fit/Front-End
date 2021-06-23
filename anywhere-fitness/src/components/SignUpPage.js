import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

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
