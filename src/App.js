import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInButton from './components/SignInButton';
import Dashboard from './components/Dashboard';
import Credit from './components/Credit';
import { fetchUser } from './actions/fetchUser';

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        {this.props.user === null ? 
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
    user: state.user
  }
}

export default connect(mapStateToProps, { fetchUser })(App);