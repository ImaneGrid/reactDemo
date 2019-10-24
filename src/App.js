import React from 'react';
import './App.css';
import Router from './routing';
import Menu from './Menu';
import Login from './modules/Authentification/Login';
import Logout from './modules/Authentification/Logout';





function App() {
  return (
    <div className="App" >
     <Router/>
    </div>
  );
}

export default App;
