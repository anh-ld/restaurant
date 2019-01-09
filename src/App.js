import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInButton from './components/SignInButton';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.sign === false ? <SignInButton /> : <Dashboard />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sign: state.sign
  }
}

export default connect(mapStateToProps, null)(App);