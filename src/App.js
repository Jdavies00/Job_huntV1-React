import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import { Navbar } from 'reactstrap';
import { AppProvider } from './utilities/AppContext'
import DashBoard from "./Components/userDashBoard";
import Register from "./Components/Register";
import Homepage from "./Components/homePage"
import JobsBoard from "./Components/jobsBoard";
import "./App.css";
import Login from './Components/Login';

export default function App() {
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [token, setToken] = useState('')
  const [userInfo, setUserInfo] = useState('')
  useEffect(() => {
    const lsToken = window.localStorage.getItem('token')
    if(lsToken){
      setToken(lsToken)
    }
  }, [])
  const initalContext = {
    setUserEmail,
    userEmail,
    setUserName,
    userName,
    setUserPassword,
    userPassword,
    setToken,
    token,
    setUserInfo,
    userInfo
  }

  return (
    <AppProvider value={initalContext}>
      <Router>
        <Navbar color="light">
          <NavLink to="/">| Home |</NavLink>
          {/* <Navlink to="/login">Login</Navlink> */}
          <NavLink to="/register">| Register |</NavLink>
          <NavLink to="/dashboard"> | My Dashboard |</NavLink>
          <NavLink to="/jobsboard"> |Jobs Board |</NavLink>
        </Navbar>
        
        <Switch>
          <Route exact path="/">
            <Homepage />
            {/* <Login /> */}
          </Route>
          <Route path ="/login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register
            />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/jobsboard">
            <JobsBoard />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}




