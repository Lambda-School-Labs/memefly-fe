import React from "react";
import { NavLink } from "react-router-dom";


// Default User Nav when not logged in with valid credentials.

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
    // console.log("run");
  };

  render() {
    return (

          <div className="linkContainer">
            
            <NavLink to="/" href="url" className="NavButton" alt="Generate a Meme">
              Generate-A-Meme
            </NavLink>

            <NavLink to="/LearnMore" href="url" className="NavButton" alt="Learn More">
              Learn More
            </NavLink>

            <NavLink to="/Login" className="NavButton" id="SignIn" alt="Sign In">
              Sign In
            </NavLink>

            <NavLink className="NavButton" to="/Register" id="HighLightLink" alt="Sign Up">
              Sign Up
            </NavLink>

          </div>
    );
  }
}

export default Navigation;
