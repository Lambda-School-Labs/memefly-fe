import React from 'react';
import NavLoggedIn from './NavLoggedIn';
import NavLoggedOut from './NavLoggedOut';

// Determines which Navigation is displayed
// Changes on Log in & log out.

const NavCondition = () => {
    // Needs to be updated to change on user log in. Not sure if we're still using tokens.
    // const navTest = localStorage.getItem("token");
    const forced = true;


    if (forced === true) {
        return <NavLoggedOut />
    }else {
        return <NavLoggedIn />
    }
}

export default NavCondition;