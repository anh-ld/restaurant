import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Credit from './components/Credit';
import { fetchUser } from './actions/userActions/fetchUser';
import styled from 'styled-components';

const $App = styled.div`
  min-height: 100vh;
`

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    const { user } = this.props;
    // console.log(user);
    return (
      <$App>
        {user === null ? 
          <React.Fragment>
            <SignIn />
            <Credit />
          </React.Fragment> : 
        <Dashboard />}
      </$App>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { fetchUser })(App);