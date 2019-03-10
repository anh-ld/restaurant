import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './components/SignIn';
import Credit from './components/Credit';
import Loading from './components/atom/Loading';
import { fetchUser } from './actions/userActions/fetchUser';
import styled from 'styled-components';

const Dashboard = React.lazy(() => import('./components/Dashboard'));

const $App = styled.div`
  min-height: 100vh;
`

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    const { user } = this.props;
    return (
      <$App>
        {user === null ? 
        <React.Suspense fallback={<Loading />}>
          <SignIn />
          <Credit />
        </React.Suspense> : 
        <React.Suspense fallback={<Loading />}>
          <Dashboard />
        </React.Suspense>
        }
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