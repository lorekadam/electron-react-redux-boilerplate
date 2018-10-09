import React from 'react';
import { Route, Redirect } from 'react-router';
const Store = require('electron-store');
const store = new Store();

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      store.get('authCode') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
