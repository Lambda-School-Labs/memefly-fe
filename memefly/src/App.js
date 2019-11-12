import React from 'react';
import { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import MemeMain from './components/MemeMain';
import MainNavLoggedOut from './Navigation/NavLoggedOut';
import MainNavLoggedIn from './Navigation/NavLoggedIn'

function App() {
  
  return (
    <>
    <Switch>
      <Route exact path="/" component={MemeMain} />


    </Switch>
    <MainNavLoggedOut />
    <MainNavLoggedIn />
    {/* <MemeMain /> */}
    </>
  );
}

export default App;
