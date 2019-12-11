import React, { useState } from "react";
import axios from "axios";
import{ Formik, Field, Form, useFormik, ErrorMessage} from "formik";
import { Redirect, Link  } from "react-router-dom";
import * as Yup from "yup";

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
				url: "http://localhost:5000/api/accounts",
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

			// if (!created) {
      //   console.log("true");
      //   throw `Email already Taken`;
			// } else {
      //   console.log("false");
			// 	setSubmitting(false);
			// 	setCreated({ created: true });
			// }

    } 
    catch (error) {
			resetForm();
			alert(error);
		}
	};

  
			return (
				<>
					<div className="LoginContainer">
						<Formik
							initialValues={{
								username: "",
								email: "",
								password: ""
							}}
							validationSchema={Yup.object({
								username: Yup.string().required('Username Required'),
								email: Yup.string().required('Email Required'),
								password: Yup.string().required('Password Required')
              })}
              onSubmit={handleSubmit}
						>
              {(props) => (
							<Form className="LoginWrapper">

								<label htmlFor="email">Email</label>
								<Field className="input" id="email" name="email" type="email" />
                <ErrorMessage name="email" />

								<label htmlFor="username"> UserName</label>
								<Field className="input" id="username" name="username" type="text" />
                <ErrorMessage name="username" />

								<label htmlFor="password">Password</label>
								<Field className="input" id="password" name="password" type="password" />
                <ErrorMessage name="password" />

								<button type="submit" id="YellowButton">
									Submit
								</button>

							</Form>
              ) }
						</Formik>
					</div>
				</>
			);
		
}

export default Register;
