import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import { Navbar, Button, Container, NavbarBrand } from 'reactstrap';
import { AppProvider } from './utilities/AppContext'
import DashBoard from "./Components/userDashBoard";
import Register from "./Components/Register";
import Homepage from "./Components/homePage"
import JobsBoard from "./Components/jobsBoard";
import "./App.css";
import Login from './Components/Login';
import Logout from './Components/logout'

export default function App() {
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [token, setToken] = useState('')
  const [userInfo, setUserInfo] = useState('')
  const [jobs, setJobs] = useState([])
  const [jobID, setJobID] = useState([])
  
  useEffect(() => {
    const lsToken = window.localStorage.getItem('token')
    if (lsToken) {
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
    userInfo,
    jobs,
    setJobs,
    jobID,
    setJobID,
  }

  return (
    
    <>
      <AppProvider value={initalContext}>
        <Router>
          <Navbar className=" sticky-top" id ="navbar">
            <NavLink to="/">| Home |</NavLink>
            {/* <Navlink to="/login">Login</Navlink> */}
            <Button><NavLink to="/register">| Register |</NavLink></Button>
            <NavLink to="/dashboard"> | My Dashboard |</NavLink>
            <NavLink to="/jobsboard"> |Jobs Board |</NavLink>
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
          </Switch>
        </Router>
      </AppProvider>

      <div className="fixed-bottom" >
        <Navbar id ='footer'>
          <Container>
            {/* <DeleteButton /> */}
            <Logout />
          </Container>
        </Navbar>
      </div>
    </>
  );
}




