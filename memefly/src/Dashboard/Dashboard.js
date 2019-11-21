import React from "react";
import axios from "axios";


class Dashboard extends React.Component {
    constructor(props) {
        super();
        this.username = localStorage.getItem("username")
    }
    //fetch account information
    async componentDidMount(){
        try{
            let config = 
            {
            
                method:"POST",
                url:"https://memefly.herokuapp.com/api/user",
                data:{
                    query:`
                    query{
                        myAccount{username, email}
                    }
                    `
                }
            }
            var result = await axios(config);
            console.log(result);
        }catch(error){

        }
    }

    render() {
        return (
            <section>
                <header>
                    <h1>Dashboard</h1>
                </header>
                <article>
                    <p>Welcome {this.username} to your dashboard</p>
                </article>
                    <aside>
                        <ul>
                            <li>Account Settings</li>
                            <li>Following</li>
                            <li>Followers</li>
                            <li>Top Likes</li>
                            <li>Create MEME</li>
                        </ul>
                    </aside>
            </section>
        )
    }
}

export default Dashboard;