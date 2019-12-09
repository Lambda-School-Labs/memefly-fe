import React, {useState} from 'react';
import axios from "axios";



// FB.api('/me', response=>{
//         setName(response.name)
//     })

const WelcomeTag = ()=>{
    const [name, setName] = useState(null);

axios.get("FB.api/me")
.then(res=>
    {console.log(res)}  
)
    
    if(name === null){
        return "Welcome!"
    }else if(name){
        return `"Welcome  ${name}! "`
    }
}

export default WelcomeTag;