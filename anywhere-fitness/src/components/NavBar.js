import React from 'react'
import Styled from "styled-components";
import { Link } from "react-router-dom";



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
    
`

const NavBar = () => {


    return (
        <StyledNavBar>
            <Link to='/login'>Login</Link>
            <Link>Sign Up</Link>
            <Link>Class List</Link>
            <Link>Log Out</Link>
        </StyledNavBar>
    )
}

export default NavBar