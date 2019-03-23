import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './components/atom/Loading';
import { fetchUser } from './actions/userActions/fetchUser';
import styled from 'styled-components';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const SignIn = React.lazy(() => import('./components/SignIn'));
const Credit = React.lazy(() => import('./components/Credit'));

const $App = styled.div`
  min-height: 100vh;
`;

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    const { user } = this.props;
    if (user === null) {
    	return <Loading />
		}

    return (
      <$App>
        {user === "None" ?
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
};

export default connect(mapStateToProps, { fetchUser })(App);