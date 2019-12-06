import React from 'react';
import NavCondition from './NavCondition';


// Container for all Nav bar Items.

const Header = () => {

    return (
      <header className="NavHeader">
        <nav className="nav">
          <div className="navWrap" >
            <div className="logoContainer">
                <a href="/" id="LogoWrap">
                    <img src="https://i.ibb.co/bNbhmXY/Meme-Fly-Crooked-Logo-White.png" className="navlogo" alt="MemeFly Logo of a Fly"/>
                </a>
            </div>
            <NavCondition/>
          </div>
        </nav>
      </header>
    );
}

export default Header;