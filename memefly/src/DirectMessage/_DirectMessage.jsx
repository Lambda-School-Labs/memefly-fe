import React from "react";
import io from "socket.io-client";
import { Formik, Form, Field } from "formik";



//client will know logged in user and 
class DirectMessage extends React.Component{
    constructor(props){
        super();
        this.props = props;     
        this.state = {
            messages:props.messages,
        }
        this.socket = io("http://localhost:5000/");
    }
    componentDidMount(){
        this.socket.on('connect', () => {
            console.log("connected");
            
           this.socket.emit('create', this.props.roomID);
   
       });
        this.socket.on("chat", (data) => {
            //make copy of messaage history
            var {messages} = this.state;
            messages.push(data);
            this.setState(messages)
         })
        

    }
    render(){
        console.log(this.props.username);
         return (
            <div>
                <div style={{
                    width:"75%",
                    height:"25%",
                    minHeight:"250px",
                    maxHeight:"250px",
                    overflowY:"auto",
                    overflowX:"auto",
                    border:"2px solid black",
                    position : "fixed", 
                    bottom:"0",
                }}>
                    {this.state.messages.map((msg, index) => {
                        return (
                            <div key={index} style={{
                                fontSize:"5px",
                                display:"flex", 
                                alignItems:"",
                                flexDirection:"row"
                               
                                }}>
                                <div>
                                    <p><small style={{color:"grey"}}> {msg.username}:</small>{msg.message}</p>
                                    <small style={{color:"grey"}}> {msg.timestamp}:</small>
                                </div>
                             
                            </div>
                        )
                        
                    })}
                </div>
                <Formik
                    initialValues={{
                        message: ""
                    }}
                    onSubmit={(values, formikBag) => {
                        formikBag.resetForm({})
                        this.socket.emit("chat", {
                            message: values.message,
                            username: this.props.username
                        })
                    }}
                   
                >{() => {
                    return (
                        <Form>
                            <Field name="message" />
                            <button type="submit" >Send</button>
                        </Form>
                    )
                }}</Formik>
            </div>
        )
    }   
}

export default DirectMessage;