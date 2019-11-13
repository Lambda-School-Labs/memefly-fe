import React from "react";
import "./form.css";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { withCookies } from "react-cookie";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies,
      isLoading: false,
      newSignup: {
        username: "",
        email: "",
        password: "",
        firstName:"",
        lastName:""
      },
      error: { status: false, message: "" }
    };
  }

  signupHandler = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      isLoading: true
    });
    axios
      .post("https://memefly.herokuapp.com/api/register",
      this.state.newSignup
      )
      .then(res => {
        this.state.cookies.set("_uid", res.data.token);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        this.setState({
          ...this.state,
          isLoading: false,
          error: { status: true, message: "Sorry but That name is taken." }
        });
      });
  };

  onChange = e => {
    this.setState({
      newSignup: {
        ...this.state.newSignup,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="MainPage">
        <form onSubmit={() => this.SignupForm()}>
          <div className="header">
            <h1>Welcome to MemeFly </h1>
          </div>
          <div className="form-group">
            <div className="input">
              <label className="control-label">UserName</label>
              <input
                type="text"
                name="username"
                value={this.username}
                onChange={this.onChange}
                className="form-control"
              />
            </div>

            <div className="input">
              <label className="control-label">Email</label>
              <input
                type="text"
                name="email"
                value={this.email}
                onChange={this.onChange}
                className="form-control"
              />
            </div>

            <div className="input">
              <label className="control-label">Password</label>
              <input
                type="text"
                name="password"
                onChange={this.onChange}
                value={this.password}
                className="form-control"
              />
            </div>

            <div className="input">
              <label className="control-label">firstName</label>
              <input
                type="text"
                name="firstName"
                onChange={this.onChange}
                value={this.firstName}
                className="form-control"
              />
            </div>

            <div className="input">
              <label className="control-label">lastName</label>
              <input
                type="text"
                name="lastName"
                onChange={this.onChange}
                value={this.lastName}
                className="form-control"
              />
            </div>

            <div className="form-btn">
              <button
                className="reg-btn"
                type="submit"
                onClick={this.SignupForm}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <h3>Already have a account </h3>

        <Link className="link" to="/">
          Login
        </Link>
      </div>
    );
  }
}

export default withRouter(withCookies(SignupForm));
