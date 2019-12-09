import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { withCookies } from "react-cookie";

import { Container, Row, Col, Input, Button, Alert, Spinner } from "reactstrap";
import Facebook from "../components/Facebook";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      newSignup: {
        username: "",
        email: "",
        password: ""
      },
      error: { status: false, message: "" }
    };
  }
  signupHandler = e => (email, username, password) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      isLoading: true
    });
    axios({
      url: "https://memefly.herokuapp.com/api/user",
      method: "post",
      data: {
        query: `
        mutation{
          register(email:"${email}", username:"${username}" password:"${password}")
     }
       `
      }
    })
      // .post(
      //   "https://memefly.herokuapp.com/api/user/register",
      //   this.state.newSignup
      // )
      .then(res => {
        console.log(res);
        this.state.set("_uid", res.data.token);
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
      <Container>
        <Row
          style={{ height: "100vh", alignItems: "center" }}
          className="text-center"
        >
          <Col xs={{ order: 2, size: 12 }} md="6">
            {this.state.error.status ? (
              <Alert color="danger"> {this.state.error.message} </Alert>
            ) : null}
            <form
              onSubmit={e =>
                this.signupHandler(e)(
                  this.state.newSignup.email,
                  this.state.newSignup.password,
                )
              }
            >
              <div onClick={this.logout}>
                <h2>Register to</h2>
                <h1>MemeFLY!</h1>
              </div>
              {/* <h3>Sign in with Facebook?</h3> */}
              <Facebook />
              <h3>Username</h3>
              <Input
                type="input"
                name="username"
                placeholder="Username"
                defaultValue={this.state.newSignup.username}
                onChange={this.handleChange}
              />
              <br />
              <h3>Email</h3>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                defaultValue={this.state.newSignup.email}
                onChange={this.handleChange}
              />
              <br />
              <h3>Password</h3>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                defaultValue={this.state.newSignup.password}
              />
              <br />
              {this.state.isLoading ? (
                <Spinner color="primary" />
              ) : (
                <Button color="primary">Register</Button>
              )}
            </form>
            <div>
              <h3>Login to account </h3>
              <Link to="/login">Login</Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
