import React from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import {Container} from "@material-ui/core";
import Facebook from "../components/Facebook";

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false
		};
		this.initValues = {
			//user can log in with either username or email
			login: "",
			password: ""
		};
		this.schema = Yup.object().shape({
			login: Yup.string().required(),
			password: Yup.string().required()
		});
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	async handleSubmit(values, formikBag) {

		var { setSubmitting, resetForm } = formikBag;
		try {
			let { login, password } = values,
				loginType;
			//check if login is type email or username
			if (login.includes("@")) {
				loginType = "email";
			} else {
				loginType = "username";
			}
			let config = {
				method: "POST",
				// url: "http://memefly.herokuapp.com/api/accounts",
				url:"http://localhost:5000/api/accounts",
				data: {
					query: `
	              query{
	                login(${loginType}:"${login}", password:"${password}"){loggedIn message token}
	              }
	            `
				}
			};
			axios.defaults.withCredentials = true;
			let {data:{data:{login:{loggedIn, token}}}} = await axios(config);

			if (!loggedIn) {
				throw `Invalid ${loginType}/password`;
			} else {
				localStorage.setItem("token", token);
				setSubmitting(false);
				this.setState({ loggedIn: true });
			}

		} catch (error) {
			resetForm();
			alert(error);
		}
	}
	//checking if already logged in
	componentDidMount() {
		if (localStorage.getItem("username")) {
			this.setState({ loggedIn: true });
		}
	}
	render() {
		var {
			initValues,
			schema,
			handleSubmit,
			state: { loggedIn }
		} = this;
		if (loggedIn) {
			/*********************************************REDIRECT************************************************/
			return <Redirect to="/" />;
			/****************************************************************************************************/
		} else {
			/**************************************FORM*******************************************/
			return (
				<React.Fragment>
					<Formik
						initialValues={initValues}
						validationSchema={schema}
						onSubmit={handleSubmit}
					>
						{props => {
							/**********************CHILDREN*********************/
							var { errors, touched, isSubmitting } = props;
							var buttonText = isSubmitting ? "Sending" : "Submit";
							var loginError = errors.login && touched.login;
							var passwordError = errors.password && touched.password;
							return (
							<Container maxWidth="xl">
								<div className="LoginContainer">
									<div onClick={this.logout} className="LogInHeader">
										<h1 id="WelcomeBack" alt="Welcome Back!">
											Welcome Back!
										</h1>
									</div>
									<Form className="LoginWrapper">
										<div>
											<h4>Username</h4>
											<Field id="login" name="login" className="input" />
											{loginError ? <small>login is required</small> : null}
										</div>

										<div>
											<h3>Password</h3>
											<Field
												className="input"
												id="password"
												name="password"
												type="password"
											/>
											{passwordError ? <small>password is required</small> : null}
										</div>

										<button type="submit" id="YellowButton">
											{buttonText}
										</button>
										<div>
											<div onClick={<Facebook/>}></div>
											<h3>
												Need an account?{" "}
												<a href="/register" id="SignUpHere" className="YellowLink">
													Sign up here.
												</a>{" "}
											</h3>
										</div>
									</Form>
								</div>
							</Container>
							);
							/*****************************************************/
						}}
					</Formik>
				</React.Fragment>
			);
			/**********************************************************************************/
		}
	}
}
export default Login;
