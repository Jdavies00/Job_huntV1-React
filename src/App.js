import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import { Navbar, Button, } from 'reactstrap';
import { AppProvider } from './utilities/AppContext';
// import axios from 'axios';
import DashBoard from "./Components/userDashBoard";
import Register from "./Components/Register";
import Homepage from "./Components/homePage"
import JobsBoard from "./Components/jobsBoard";
import "./App.css";
import Login from './Components/Login';
import Footer from './Components/footer'
// import Logout from './Components/logout'
import Newpost from "./Components/newAllJobs"
import axiosHelper from './utilities/axiosHelper';

export default function App() {

  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [token, setToken] = useState('')
  const [userInfo, setUserInfo] = useState('')
  const [jobs, setJobs] = useState([])
  const [jobID, setJobID] = useState(0)

  //put these on the right file
  const [jobName, setJobName] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [jobCreatedBy, setJobCreatedBy] = useState('')
  const [jobCompanyName, setJobCompanyName] = useState('')
  const [jobLink, setJobLink] = useState('')
  const [jobSalary, setJobSalary] = useState(0)


  useEffect(() => {
    const lsToken = window.localStorage.getItem('token')
    if (lsToken) {
      setToken(lsToken)
    }
  }, [])
  useEffect(() => {
    if (token.length > 0) {
      axiosHelper({
        method: 'get',
        route: 'api/user',
        token,
        success: setUserInfo
      })
    }
  }, [token])

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
    userInfo,
    setJobs,
    jobs,
    setJobID,
    jobID,

    //remeber to get rid of this 
    setJobName,
    jobName,
    setJobDescription,
    jobDescription,
    setJobCreatedBy,
    jobCreatedBy,
    setJobCompanyName,
    jobCompanyName,
    setJobLink,
    jobLink,
    setJobSalary,
    jobSalary,

  }

  return (

    <>
      <Router>
        <AppProvider value={initalContext}>
          <Navbar className="sticky-top" style={{
            backgroundColor: '#E6E6E8',
            fontFamily: 'BodoniFlf regular',
            color: 'black'}} >
            <NavLink to="/"> HC </NavLink>
            <NavLink to="/register"> Register </NavLink>
            <NavLink to="/dashboard">  My Dashboard </NavLink>
            <NavLink to="/jobsboard"> Jobs Board </NavLink>
            <NavLink to="/newpost"> New Post </NavLink>
          </Navbar>

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/login">
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
            <Route path="/newpost">
              <Newpost />
            </Route>
          </Switch>
        </AppProvider>
        {token.length > 0 && <Footer />}
      </Router>

    </>
  );
}




