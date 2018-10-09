import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
const Store = require('electron-store');
const store = new Store();

@connect()
export default class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    store.delete('authCode');
    this.props.dispatch(push('/login'));
  };

  render() {
    return <button onClick={this.logout}>Logout</button>;
  }
}
