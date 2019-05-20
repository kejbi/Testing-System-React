import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavBar from './components/AppNavBar'
import Home from './components/Home'
import Profile from './components/Profile'
import {Route} from 'react-router-dom'

function App() {
  return (
      <div>
        <AppNavBar isAuthenticated = {true}/>
        <Route path="/" exact={true} component = {Home}/>
        <Route path="/me" render = {() => <Profile isStudent = {false} />} />
      </div>
      
  );
}

export default App;
