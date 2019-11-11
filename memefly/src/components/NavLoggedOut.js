import React from 'react';

const MainNav=()=>{
    return(
        <nav>
            <div className="logoContainer">
                <img src="https://i.ibb.co/bNbhmXY/Meme-Fly-Crooked-Logo-White.png" className="navlogo" />
            </div>
            <div className="linkContainer">
                <a href="url" id="generateMeme">Generate a Meme</a>
                <a href="url">Learn More</a>
                <a href="url">Sign In</a>
                <a href="url">Sign Up</a>
            </div>
        </nav>
    );
}
export default MainNav;