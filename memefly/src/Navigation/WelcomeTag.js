import React, {useState} from 'react';
import axios from "axios";

const WelcomeTag = ()=>{
    let name = localStorage.getItem("name")
    
    if(name === undefined){
        return "Welcome!"
    }else{
        return `"Welcome,  ${name}!"`
    }
}

export default WelcomeTag;