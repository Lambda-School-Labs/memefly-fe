// React Stuff
import React from "react";
import { Route, Switch } from "react-router-dom";

// Styling
import "./App.css";

// Components
import MemeMain from "./components/MemeMain";
import Login from "./LoginPage/Login";
import Register from "./RegisterPage/Register";
import Header from "./Navigation/Header";
import Userprofile from "./UserProfile/Userprofile";

function App() {
  return (
    <>
      <Header/>

      <Switch>
        <Route exact path="/" component={MemeMain} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Profile" component={Userprofile} />
      </Switch>
    </>
  );
}

export default App;
