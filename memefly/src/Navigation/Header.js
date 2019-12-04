import React from 'react';
import NavCondition from './NavCondition';
import GenerateMeme from '../ImgEditor/GenerateMeme.js'


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
            {/* FB LOGIN BUTTON */}
            <div class="fb-login-button" data-width="" data-size="medium" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="true" data-onlogin={GenerateMeme}></div>
            {/* <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
            </fb:login-button> */}
          </div>
        </nav>
      </header>
    );
}

export default Header;