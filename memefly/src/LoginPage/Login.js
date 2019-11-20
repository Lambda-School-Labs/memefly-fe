import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { withCookies } from "react-cookie";

import { Container, Row, Col, Input, Button, Alert, Spinner } from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      credentials: {
        username: "",
        //email: "",
        password: ""
      },
      error: { status: false, message: "" }
    };
  }

  login = e => (username, password) => {
    e.preventDefault();
    this.setState({
      ...this.state
      //isLoading: true
    });

    //const axios = require("axios");

    axios({
      url: "https://memefly.herokuapp.com/api/user",
      method: "post",
      data: {
        query: `{
        login(username:"${username}", password:"${password}")
     }
       `
      }
    })
      // }).then(result => {
      //   console.log(result.data);
      // });

      //   .post(
      //     "https://memefly.herokuapp.com/api/user",
      //     this.state.credentials
      //   )

      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          credentials: {
            username: "",
            //email: "",
            password: ""
          }
        });
        // this.state.set("_uid", res.data.token);
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
        this.setState({
          ...this.state,
          isLoading: false,
          error: {
            status: true,
            message: "Incorrect Info... please try again ; )"
          }
        });
      });
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
      <Container>
        <Row
          style={{ height: "100vh", alignItems: "center" }}
          className="text-center"
        >
          <Col xs={{ order: 2, size: 12 }} md={{ order: 1, size: 6 }}>
            {this.state.error.status ? (
              <Alert color="danger">{this.state.error.message}</Alert>
            ) : null}
            <form onSubmit={this.login}>
              <div onClick={this.logout}>
                <h2>Login to</h2>
                <h1>MemeFLY</h1>
              </div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              {/* <br />
              <Input
                type="text"
                name="email"
                placeholder="email"
                value={this.state.credentials.email}
                onChange={this.handleChange}
              /> */}
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <br />
              {this.state.isLoading ? (
                <Spinner color="primary" />
              ) : (
                <Button color="primary">Login</Button>
              )}
            </form>
            <div>
              <h3>Register for a account </h3>
              <Link to="/register">Register</Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
