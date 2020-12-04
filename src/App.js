import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import { Navbar, NavbarBrand } from 'reactstrap';
import { AppProvider } from './utilities/AppContext'
import DashBoard from "./Components/userDashBoard";
import Register from "./Components/Register";
import HomePage from "./Components/homePage";
import JobsBoard from "./Components/jobsBoard";
import "./App.css";

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
          <NavbarBrand>HC</NavbarBrand>
          <NavLink to="/">| Home |</NavLink>
          <NavLink to="/register">| Register |</NavLink>
          <NavLink to="/dashboard"> | My Dashboard |</NavLink>
          <NavLink to="/jobsboard"> |Jobs Board |</NavLink>
        </Navbar>
        <hr />
        <Switch>
          <Route exact path="/">
            <HomePage />
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




