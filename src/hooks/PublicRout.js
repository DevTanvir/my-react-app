import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  let isLoggedIn;
  let userAuthToken = JSON.parse(sessionStorage.getItem('jwtToken'));
  if (userAuthToken) {
    isLoggedIn = true
  } else {
    isLoggedIn = false
  }
  return (
    <Route {...rest} render={props => (isLoggedIn && restricted ?
      <Redirect to="/" /> : <Component {...props} />)} />
  );
};

export default PublicRoute;