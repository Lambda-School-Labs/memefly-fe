import React from "react";
// import { Link } from "react-router-dom";
import Facebook from "../components/Facebook";
import WelcomeTag from "../Navigation/WelcomeTag";



const Userprofile = ()=>{
    let email = localStorage.getItem("email")
    // let isLoggedIn = localStorage.getItem("isLoggedIn")


    return(
        <>
        <div className="profileCard">
        <h2><WelcomeTag /></h2>
        <h3>Avatar: <img src={`${localStorage.getItem("picture")}`} className="avatar" alt='Facebook Avatar'/></h3>
        <h3>E-Mail: {email}</h3>
        <h3><Facebook /></h3>
        </div>
        </>
    )
}
export default Userprofile;