import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login'

const Facebook =()=>{
const [state, setState] = useState({
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture:  "",
    accessToken: ""
})
 

const componentClicked = ()=> console.log("component clicked");

const responseFacebook = (response) => {
    console.log(response);
    setState({        
        isLoggedIn: true,
        userID: response.id,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
        accessToken: response.accessToken
    })
    console.log("state", state)
}
console.log(state)
useEffect(()=>{
    window.localStorage.setItem("user id", state.userID)
    window.localStorage.setItem("name", state.name)
    window.localStorage.setItem("email", state.email)
    window.localStorage.setItem("picture", state.picture)
    window.localStorage.setItem("isLoggedIn", state.isLoggedIn)
})
let fbContent;

if(state.isLoggedIn){
fbContent="Your " + state.name +" Facebook is connected!";
}else{
    fbContent = (<FacebookLogin
    appId="2663807077036415"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />);
}
return(
        <div>
        {fbContent}
        </div>
    )
}
export default Facebook;