import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies
    };
  }

  handleChange = () => {
    this.state.cookies.remove("_uid");
    this.props.history.push("/login");
    console.log("run");
  };

  render() {
    return (
      <div className="nav">
        <h2>MemeFly</h2>
        <Link className="logout" onClick={this.state.handleChange} to="/">
          Log Out
        </Link>
      </div>
    );
  }
}

export default withCookies(Navigation);
