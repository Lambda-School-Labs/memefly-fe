import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { withCookies } from "react-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      cookies: props.cookies,
      credentials: {
        username: "",
        password: ""
      },
      token: ""
    };
  }

  login = e => {
    e.preventDefault();
    axios
      .post("https://memefly.herokuapp.com/api/login", this.state.credentials)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          credentials: {
            username: "",
            password: ""
          }
        });
        this.state.cookies.set("_uid", res.data.token);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <div className="header" onClick={this.logout}>
            <h1>Login to MemeFly </h1>
          </div>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
        <h3>Register for a account </h3>

        <Link className="link" to="/Register">
          Register
        </Link>
      </div>
    );
  }
}

export default withCookies(Login);
