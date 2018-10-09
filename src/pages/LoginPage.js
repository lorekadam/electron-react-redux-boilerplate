import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
const Store = require('electron-store');
const store = new Store();

import { shell } from 'electron';
import http from 'http';

@connect()
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (store.get('authCode')) {
      this.props.dispatch(push('/app'));
    }
  }

  logIn = () => {
    const { dispatch } = this.props;
    if (store.get('authCode') === undefined) {
      const server = http.createServer(function(req, res) {
        if (req.url.indexOf('code') !== -1) {
          store.set('authCode', req.url.slice(14));
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.write('Logged in!');
          res.end();
          server.close();
          dispatch(push('/app'));
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.write('Denied');
          res.end();
          server.close();
        }
      });
      server.listen(34106);
      const url = null; // FILL URL!!!
      if (url === null) {
        throw new Error('Fill OAuth2 URL! in src/pages/LoginPage.js');
      }
      shell.openExternal(url);
    }
  };

  render() {
    return (
      <h1>
        <button onClick={this.logIn}>Log In!</button>
      </h1>
    );
  }
}
