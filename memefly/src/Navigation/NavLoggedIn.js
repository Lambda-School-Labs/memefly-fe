import React from "react";
import {Avatar, Grid} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // cookies: props.cookies
    };
  }

  handleChange = () => {
    // this.state.cookies.remove("_uid");
    this.props.history.push("/login");
    console.log("run");
  };

  render() {
    return (
      <nav className="nav">
        <div className="navWrap">
          <div className="logoContainer">
            <img
              src="https://i.ibb.co/bNbhmXY/Meme-Fly-Crooked-Logo-White.png"
              className="navlogo"
            />
          </div>

          <div className="linkContainer">
            <NavLink to="/"
              href="url"
              id="HighLightLink"
              className="NavButton"
              alt="Generate a Meme"
            >
              Generate a Meme
            </NavLink>
            <NavLink to="/" href="url" className="NavButton" alt="Learn More">
              Learn More
            </NavLink>

            <div className='UserWrapper'>
              <NavLink to="/"
                className="NavButton"
                id="UserName"
                alt="Username, access to account"
              >
                UserName 

                <Grid container justify="center" alignItems="center" id='UserNavAvatar'>
                  <Avatar alt="Remy Sharp" src="https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg"   />
                </Grid>
                </NavLink>
                
                <NavLink
                className="NavButton"
                id="LogOut"
                to="/"
                alt="LogOut"
              >
                Log Out
              </NavLink>



            </div>

            {/* This is to be styled as per figma link */}
            {/* <div className='UserWrapper'>
                <nav className="NavLink" id="UserName" alt='Username, access to account'>UserName</nav>
                <nav className="NavLink" id='LogOut' onClick={this.state.handleChange} to="/" alt='LogOut'>
                  Log Out
                </nav>
              </div> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
