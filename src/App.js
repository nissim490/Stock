import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import Balance from './user/pages/Balance.js';
import HomePage from './user/pages/HomePage';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
const App = () => {
  const { token, login, logout, userId ,role} = useAuth();
 
  let routes;
console.log(userId);

 
   //debugger
    routes = (
      <Switch>
        <Route path="/" exact>
        <HomePage />
        </Route>
        <Route path="/Balance">
          <Balance />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        job:  !!(role==='admin'),
        token: token,
        userId: userId,
        login: login,
        logout: logout,
        role:role
      }}
    >
      <Router>
        <MainNavigation />
        <main className='app' >{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};
export default App;