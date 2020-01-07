import React from "react";
import { Avatar, Grid, Box } from "@material-ui/core";
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
        
        <NavLink to="/LearnMore" href="url" className="NavButton" alt="Learn More">
          Learn More
        </NavLink>

        <Box className="UserWrapper">
          <NavLink to="/profile" className="NavButton" id="Profile" alt="Username, access to account">
            <Grid container justify="center" alignItems="center" id="UserNavAvatar">

            

              <a className="NavButton" id="LogOut" onClick={this.logOut} alt="LogOut">
                Log Out
              </a>
            </Grid>

              <Avatar to="/profile" alt="Avatar Image" src="https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg" />


          </NavLink>
        </Box>
      </div>
    );
  }
}

export default Navigation;
