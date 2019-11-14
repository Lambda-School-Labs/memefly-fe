/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import MemeMain from './components/MemeMain';
import MainNav from './components/NavLoggedOut';
import DirectMessage from "./DirectMessage";

// {"username":"rmanginot0","email":"mthreadgold0@ow.ly","password":"Z3VTfwJeN6"},
// {"username":"jkeemer1","email":"lhilley1@smh.com.au","password":"THbVMTKL"},
function App() {
  
  return (
    <>
    {/* <MainNav />
    <MemeMain /> */}
    {/* hard coded for now */}
    <DirectMessage username={"jkeemer1"} password={"THbVMTKL"}/>
    {/* <DirectMessage username={"rmanginot0"} password={"Z3VTfwJeN6"}/> */}
    </>
  );
}

export default App;
