import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInButton from './components/SignInButton';
import Dashboard from './components/Dashboard';
import Credit from './components/Credit';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.sign === false ? 
          <React.Fragment>
            <SignInButton />
            <Credit />
          </React.Fragment> : 
        <Dashboard />}
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