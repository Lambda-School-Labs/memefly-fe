import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import MemeMain from './components/MemeMain';
import MainNav from './components/NavLoggedOut';

function App() {
  
  return (
    <>
    <MainNav />
    <MemeMain />
    </>
  );
}

export default App;
