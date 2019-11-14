/* eslint-disable */
import React,{useEffect, useState} from "react";
import DirectMessage from "./_DirectMessage.jsx";
import axios from "axios";

const URL = "https://memefly.herokuapp.com/api/user";



export default function ({username, password}){
    var [messages, setMessages] = useState({loading:true})
    var [roomID, setRoomID] = useState(null);
    useEffect(() => {
    async function createDMRoom(username){
        //TEMP LOGIN CALL!!!!!!!!!!!!!!!!!


      var login =  await axios({
            withCredentials:true,
            url:URL,
            method: "POST",
            data: {
                query:`
                query {
                    login(username:"${username}", password:"${password}")
                }
                `
            }
        })
        console.log("logged in as ", login.data.data.login);
        var query = await axios({
            withCredentials:true,
            url:URL,
            method: "POST",
            data: {
                query:`
                mutation{
                    createDMRoom(username:"${username}"){
                        status
                        roomID
                        messages{
                        username
                        message
                        timestamp
                        
                        }
                    }
                    }	
                `
            }
        })
       setMessages(query.data.data.createDMRoom.messages);
       setRoomID(query.data.data.createDMRoom.roomID);
    }
       createDMRoom(username);
    },[])
    if(messages.loading) {
        return <>INSERT "LOADING" COMPONENT HERE</>
    }else if(messages.status == 404){
        //user must LOGIN
        return <>INSERT "PLEASE LOGIN" COMPONENT HERE THAT REDIRECTS</>
    }else{
        console.log(messages)
        return <DirectMessage messages={messages} username={username} roomID={roomID}/>
    }
    
}