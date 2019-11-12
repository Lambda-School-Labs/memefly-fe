import React from 'react';

const NavCondition = () => {
    const navTest = localStorage.getItem("token");

    if (test === null) {
        return <LoggedOut />
        
    }else {
        return <LoggedIn />
    }
}

export default NavCondition;