import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AUTHENTICATED, ADMIN } from '../constants/sessionstorage';

function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = sessionStorage.getItem(AUTHENTICATED) === 'true';
  const isAdmin = rest.admin ? sessionStorage.getItem(ADMIN) === 'true' : true;

  if (isAuthenticated) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAdmin ? (
            children
          ) : (
              <Redirect
                to={{
                  pathname: "/student/mark_attendance",
                  state: { from: location }
                }}
              />
            )
        }
      />
    );
  }

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
