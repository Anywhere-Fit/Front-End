import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const StyledNavBar = Styled.div`
    border: 2px solid black;
    border-radius: 40px;
    width: 40%;
    margin: 2% auto;
    display: flex;
    justify-content: space-evenly;
    background-color: beige;
    
    a {
        text-decoration: none;
        color: black;
        padding: 2%;

    }

    a:hover {
        color: red;
    }
    
`;

const NavBar = () => {
  const { push } = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    push("/");
  };

  return (
    <StyledNavBar>
      <Link to="/">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/classlist">Class List</Link>
      <Link onClick={logout}>Log Out</Link>
    </StyledNavBar>
  );
};

export default NavBar;
