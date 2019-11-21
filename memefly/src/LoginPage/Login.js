import React from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import {Redirect} from "react-router-dom";
import * as Yup from "yup";

class Login extends React.Component {

  constructor() {
    super();
    this.state = 
    {
      loggedIn: false
    }
    this.initValues =
      {
        //user can log in with either username or email
        login: "",
        password: ""
      };

    this.schema = Yup.object().shape({

      login: Yup.string().required(),
      password: Yup.string().required()

    })
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(values, formikBag) {
    var { setSubmitting, resetForm } = formikBag;
    try{
        let {login, password} = values, loginType;

        //check if login is type email or username
        if(login.includes("@")){
          loginType = "email";
        }else{
          loginType = "username";
        }
        
        let config = 
        {
          
          method:"POST",
          url:"https://memefly.herokuapp.com/api/user",
          data:{
            query:`
              query{
                login(${loginType}:"${login}", password:"${password}")
              }
            `
          }
        }
        axios.defaults.withCredentials = true;
        let {data:{data:{login:result}}} = await axios(config);

        if(result.trim() == "Invalid Credentials"){
          throw `Invalid ${loginType}/password`;
        }else{       

          localStorage.setItem("username", result);
          setSubmitting(false);
          this.setState({loggedIn:true});

        }
    }catch(error){
      resetForm();
      alert(error);
    }
  }

  //checking if already logged in 
  componentDidMount(){
    if(localStorage.getItem("username")){
      this.setState({loggedIn:true})
    }
  }

  render() {

    var { initValues, schema, handleSubmit, state:{loggedIn} } = this;

    if(loggedIn){

      /*********************************************REDIRECT************************************************/
      return <Redirect to="/dashboard" />
      /****************************************************************************************************/

    }else{
            /**************************************FORM*******************************************/
        return (

          <React.Fragment>
            <Formik initialValues={initValues} validationSchema={schema} onSubmit={handleSubmit} >
              {
                props => {
                      /**********************CHILDREN*********************/
                      var {errors, touched, isSubmitting} = props;
                      var buttonText = isSubmitting ? "Sending":"Submit";
                      var loginError = errors.login && touched.login
                      var passwordError = errors.password && touched.password
                      
                      return (
                          <Form>
                            <div>

                              <label htmlFor="login">Login</label>
                              <Field id="login" name="login" />
                              {loginError ? <small>login is required</small>:null}

                            </div>

                            <div>

                              <label htmlFor="password">Password</label>
                              <Field id="password" name="password" type="password" />
                              {passwordError ? <small>password is required</small>:null}

                            </div>
            
                                <button type="submit" >{buttonText}</button>
                          </Form>
                      )
                    /*****************************************************/
                }
              }
            </Formik>
          </React.Fragment>
        )
        /**********************************************************************************/
      }
    }
}
export default Login;
