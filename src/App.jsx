import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CompanyList from './components/CompanyList';
import CompanyDetail from './components/CompanyDetail';
import JobsPage from './components/JobsPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ProfileForm from './components/ProfileForm';
import JoblyApi from './api';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage('jobly-token');

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        JoblyApi.token = token;
        let user = await JoblyApi.getUser("testuser"); // Replace "testuser" with dynamic username
        setCurrentUser(user);
      }
    }
    getCurrentUser();
  }, [token]);

  async function login(data) {
    let token = await JoblyApi.login(data);
    setToken(token);
  }

  async function signup(data) {
    let token = await JoblyApi.signup(data);
    setToken(token);
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function updateUser(updatedUser) {
    setCurrentUser(updatedUser);
  }

  return (
    <BrowserRouter>
      <NavBar currentUser={currentUser} logout={logout} />
      <Switch>
        <Route exact path="/" render={() => <HomePage currentUser={currentUser} />} />
        <Route exact path="/companies" render={() => currentUser ? <CompanyList /> : <Redirect to="/login" />} />
        <Route path="/companies/:handle" render={() => currentUser ? <CompanyDetail currentUser={currentUser} /> : <Redirect to="/login" />} />
        <Route exact path="/jobs" render={() => currentUser ? <JobsPage currentUser={currentUser} /> : <Redirect to="/login" />} />
        <Route exact path="/login" render={() => <LoginPage login={login} />} />
        <Route exact path="/signup" render={() => <SignupPage signup={signup} />} />
        <Route exact path="/profile" render={() => currentUser ? <ProfileForm currentUser={currentUser} updateUser={updateUser} /> : <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
