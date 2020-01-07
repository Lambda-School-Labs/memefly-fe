import React, { useState } from "react";
import axios from "axios";
import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";
import { Redirect, Link } from "react-router-dom";
import * as Yup from "yup";
import {Container} from "@material-ui/core";
import Facebook from "../components/Facebook";
import { push_uniq } from "terser";

const Register = () => {
	const [created, setCreated] = useState({
		created: false
	});

	console.log(created);

	async function handleSubmit(values, formikBag) {
		var { setSubmitting, resetForm } = formikBag;
		let { username, email, password } = values;
		console.log(username, email, password);
		console.log("HANDLE SUBMIT WAS HIT.");
		try {
			let config = {
				method: "POST",
				url: "https://memefly.herokuapp.com/api/accounts",
				// url:"https://localhost:5000/api/accounts",
				data: {
					query: `
	              mutation{
	                register(username:"${username}", email:"${email}", password:"${password}"){message created}
	              }
	            `
				}
			};

			axios.defaults.withCredentials = true;
			let test = await axios(config);
			console.log(test);
			window.push("/");
			// if (!created) {
			//   console.log("true");
			//   throw `Email already Taken`;
			// } else {
			//   console.log("false");
			// 	setSubmitting(false);
			// 	setCreated({ created: true });
			// }
		} catch (error) {
			resetForm();
			alert(error);
		}
	}

	return (
		<>
			<div className="RegisterContainer">
		<Container maxWidth="xl">
				<div className="LogInHeader">
					<h1 id="WelcomeBack" alt="Welcome Back!">
						Welcome To MemeFly
						<p>
							To access the full version of MemeFly, we need to get to know you a
							little better.
						</p>
					</h1>
				</div>

				<Formik
					initialValues={{
						username: "",
						email: "",
						password: ""
					}}
					validationSchema={Yup.object({
						username: Yup.string().required("Username Required"),
						email: Yup.string().required("Email Required"),
						password: Yup.string().required("Password Required")
					})}
					onSubmit={handleSubmit}
				>
					{props => (
						<Form className="RegisterWrapper">
							<p><h2>Hi!</h2> You can call me 
							<Field className="input" id="username" name="username" type="text" placeholder="UserName"/>
							<ErrorMessage name="username" />.</p>
							<p>If I forget my password or anything, you can email me at
							{/* <label htmlFor="email">Email</label> */}
							<Field className="input" id="email" name="email" type="email" placeholder="Email"/>
							<ErrorMessage name="email" /> </p>

							<p>I know my password needs to be 8 characters long and at least one uppercase letter. </p>
							<p> I'd like my password to be 
							<Field className="input" id="password" name="password" type="password" placeholder="Password" />
							<ErrorMessage name="password" /> </p>
							{/* <label htmlFor="password">Password</label> */}

							<button type="submit" id="YellowButton">
								Submit
							</button>
							<br/>
							<p>Or...</p>
							<Facebook/>


							<div>
								<h3>
									Already have an account?{" "}
									<a href="/Login" id="SignUpHere" className="YellowLink">
										Log in.
									</a>{" "}
								</h3>
							</div>
						</Form>
					)}
				</Formik>
			</Container>
			</div>
		</>
	);
};

export default Register;
