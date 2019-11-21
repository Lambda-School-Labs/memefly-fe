import React from "react";
// import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
// import { withCookies } from "react-cookie";

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
            <nav href="url" id="HighLightLink" className="NavLink" alt='Generate a Meme'>Generate a Meme</nav>
            <nav href="url" className="NavLink" alt='Learn More'>Learn More</nav>
            <nav href="/login" className="NavLink" alt='log-in'>Log-IN</nav>
            <nav href="/register" className="NavLink">Register</nav>


              <div className='UserWrapper'>
                <nav className="NavLink" id="UserName" alt='Username, access to account'>UserName</nav>
                <nav className="NavLink" id='LogOut' onClick={this.state.handleChange} to="/" alt='LogOut'>
                  Log Out
                </nav>
              </div>

          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
