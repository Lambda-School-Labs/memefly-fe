import React from 'react';
import {
    NavLink
} from 'react-router-dom';

const MainNavLoggedOut = () => {
    return (
        <nav>
            <div className="logoContainer">
                <img src="https://i.ibb.co/bNbhmXY/Meme-Fly-Crooked-Logo-White.png" className="navlogo" />
            </div>

            <div className="linkContainer">
                {/* <NavLink exact activeClassName="active" to="/MemeMain" id="generateMeme">Generate a Meme</NavLink>
                <NavLink>Learn More</NavLink>
                <NavLink>Sign In</NavLink>
                <NavLink>Sign Up</NavLink> */}
            </div>
        </nav>
    );
}
export default MainNavLoggedOut;