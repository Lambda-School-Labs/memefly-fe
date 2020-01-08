import React from 'react';
import NavLoggedIn from './NavLoggedIn';
import NavLoggedOut from './NavLoggedOut';

// Determines which Navigation is displayed
// Changes on Log in & log out.

const NavCondition = () => {
    // Needs to be updated to change on user log in. Not sure if we're still using tokens.
    const navTest = localStorage.getItem("token");
    const faceTest = localStorage.getItem("isLoggedIn");
    // const forced = true;
    // console.log(faceTest);


    if (!navTest || !faceTest) {
        return <NavLoggedOut />
    }else {
        return <NavLoggedIn />
    }
}

export default NavCondition;