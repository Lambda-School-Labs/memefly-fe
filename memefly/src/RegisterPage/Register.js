import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { withCookies } from "react-cookie";

import { Container, Row, Col, Input, Button, Alert, Spinner } from "reactstrap";

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

  signupHandler = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      isLoading: true
    });
    axios
      .post(
        "https://memefly.herokuapp.com/api/user/register",
        this.state.newSignup
      )
      .then(res => {
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
            <form onSubmit={this.signupHandler}>
              <div onClick={this.logout}>
                <h2>Register to</h2>
                <h1>MemeFLY!</h1>
              </div>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={this.username}
                onChange={this.onChange}
              />
              <br />
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={this.email}
                onChange={this.onChange}
              />
              <br />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
                value={this.password}
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
