import React from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar'
import Home from './components/Home'
import Profile from './components/Profile'
import {Route} from 'react-router-dom'
import StudentTests from './components/StudentTests';

function App() {
  return (
      <div>
        <AppNavBar isAuthenticated = {true}/>
        <Route path="/" exact={true} component = {Home}/>
        <Route path="/me" render = {() => <Profile isStudent = {true} />} />
        <Route path="/student/tests" render = {() => <StudentTests isStudent = {true} />}></Route>
      </div>
      
  );
}

export default App;
