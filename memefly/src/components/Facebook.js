import React, { useState, useEffect } from "react";
import FacebookLogin from "react-facebook-login";

const Facebook = () => {
	const [state, setState] = useState({
		isLoggedIn: false,
		userID: "",
		name: "",
		email: "",
		picture: "",
		accessToken: ""
	});

	const responseFacebook = response => {
		console.log(response);
		setState({
			isLoggedIn: true,
			userID: response.id,
			name: response.name,
			email: response.email,
			picture: response.picture.data.url,
			accessToken: response.accessToken
		});
		console.log("state", state);
	};
	console.log("Facebook state response: ", state);
	const componentClicked = () => console.log("component clicked");

	useEffect(() => {
		window.localStorage.setItem("user id", state.userID);
		window.localStorage.setItem("name", state.name);
		window.localStorage.setItem("email", state.email);
		window.localStorage.setItem("picture", state.picture);
		window.localStorage.setItem("isLoggedIn", state.isLoggedIn);
	});
    let fbContent;
    

	if (state.isLoggedIn) {
		fbContent = "Your " + state.name + " Facebook is connected!";
		console.log("isloggedin: ", state.isLoggedIn);
	} else {
		fbContent = (
			<FacebookLogin
				appId="2663807077036415"
				autoLoad={false}
				fields="name,email,picture"
				onClick={componentClicked}
                callback={responseFacebook}
			/>
		);
	}

	return(<div class="fb-login-button" data-width="" data-size="small" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="false" component={fbContent}></div> )
};
export default Facebook;
