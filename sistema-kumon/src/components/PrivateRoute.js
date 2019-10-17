import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AUTHENTICATED } from '../constants/sessionstorage';

function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = sessionStorage.getItem(AUTHENTICATED);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;
