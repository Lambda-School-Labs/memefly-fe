// React Stuff
import React from 'react';
import { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom';

// Styling
import './App.css';

// Components
import MemeMain from './components/MemeMain';
import MainNavLoggedOut from './Navigation/NavLoggedOut';
import MainNavLoggedIn from './Navigation/NavLoggedIn'
import NavCondition from './Navigation/NavCondition';
// import Entry from '.components/Entries'

function App() {
  
  return (
    <>
      {/* ******** Navs Placed here to build them out with out auth restrictions ********** */}\
      {/* ******** Will be moved to Nav Condition when ready ************** */}
      {/* <MainNavLoggedOut /> */}
      <MainNavLoggedIn />


      <Switch>
        <Route exact path="/MemeMain" component={MemeMain} />
        <Route exact path="/NavCondition" component={NavCondition}/>
      </Switch>

      <MemeMain />

    </>
  );
}

export default App;
