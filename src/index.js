import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';

import LoginPage from './pages/LoginPage';
import MainApp from './MainApp';
import { PrivateRoute } from './components/PrivateRoute';
import Logout from './components/Logout';

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <ul>
          <li>
            <Link to="/login">Public Page</Link>
          </li>
          <li>
            <Link to="/app">Protected Page </Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
        <Redirect to="/app" />
        <PrivateRoute path="/app" component={MainApp} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
