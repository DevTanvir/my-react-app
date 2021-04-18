import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
  let isLoggedIn

  let userAuthToken = JSON.parse(sessionStorage.getItem('jwtToken'));
  if (userAuthToken) {
    isLoggedIn = true
  } else {
    isLoggedIn = false
  }
  return(
    <Route {...rest} render={props => (isLoggedIn ? <Component {...props} /> :
      <Redirect to="/login" />)} />
  )
};


export default PrivateRoute;