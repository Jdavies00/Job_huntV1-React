import React, { useState } from 'react';
import DashBoard from "../Components/userDashBoard";
import Register from "../Components/Register"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import HomePage from "../Components/homePage";
import { Navbar, NavbarBrand } from 'reactstrap';
import JobsBoard from "../Components/jobsBoard"
import { AppProvider } from '../Components/utilities/AppContext'

const RRHead = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [bearer, setToken] = useState('')
  const [userInfo, setUserInfo] = useState('')

  const initalContext = {  
    setUserEmail: setUserEmail,
    userEmail:userEmail,
    setUserName:setUserName,
    userName:userName,
    setUserPassword:setUserPassword,
    userPassword:userPassword,
    setToken:setToken,
    bearer:bearer,
    setUserInfo:setUserInfo,
    userInfo:userInfo}

  return (
    <AppProvider
      value= {initalContext}
      >

      <Router>
        <>
          <Navbar color="light">
            <NavbarBrand>Open Season</NavbarBrand>
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
            {/* comunity jobs */}
            <Route path="/jobsboard">
              <JobsBoard />
            </Route>


          </Switch>
        </>
      </Router>
    </AppProvider>
  );
}

export default RRHead;
