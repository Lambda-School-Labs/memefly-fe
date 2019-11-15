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
        <div className="logoContainer">
          <img
            src="https://i.ibb.co/bNbhmXY/Meme-Fly-Crooked-Logo-White.png"
            className="navlogo"
          />
        </div>

        <div className="linkContainer">
          <a href="url" id="generateMeme">
            Generate a Meme
          </a>
          <a href="url">Learn More</a>
          <a href="/login">Log-IN</a>
          <a href="/register">Register</a>
          <a> Dynamic usernanme here </a>
        </div>
        <nav className="logout" onClick={this.state.handleChange} to="/">
          Log Out
        </nav>
      </nav>
    );
  }
}

export default Navigation;
