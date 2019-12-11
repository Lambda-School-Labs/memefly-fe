import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

// Navigation bar when user is logged in with valid credentials

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

   logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  }

  render() {
    return (
      <div className="linkContainer">
        <NavLink to="/" href="url" id="HighLightLink" className="NavButton" alt="Generate a Meme" >
          Generate a Meme
        </NavLink>
        
        <NavLink to="/" href="url" className="NavButton" alt="Learn More">
          Learn More
        </NavLink>

        <div className="UserWrapper">
          <NavLink to="/profile" className="NavButton" id="Profile" alt="Username, access to account">
            UserName
            <Grid container justify="center" alignItems="center" id="UserNavAvatar">
              <Avatar to="/profile" alt="Avatar Image" src="https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg" />
            </Grid>
          </NavLink>

          <a className="NavButton" id="LogOut" onClick={this.logOut} alt="LogOut">
            Log Out
          </a>
        </div>
      </div>
    );
  }
}

export default Navigation;
