import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loading from './components/atom/Loading';
import {fetchUser} from './actions/userActions/fetchUser';
import styled from 'styled-components';
import {changeTheme} from "./actions/themeActions/changeTheme";

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const SignIn = React.lazy(() => import('./components/SignIn'));
const Footer = React.lazy(() => import('./components/Footer'));

const $App = styled.div`
  min-height: 100vh;
  background-color: ${({color}) => color['50']};
`;

class App extends Component {
	componentWillMount() {
		const {fetchUser} = this.props;
		fetchUser();
		this.setTheme();
	}

	setTheme = () => {
		const {changeTheme, currentTheme} = this.props;
		if (!localStorage.getItem('color')) {
			localStorage.setItem('color', currentTheme)
		} else {
			const color = localStorage.getItem('color');
			changeTheme(color);
		}
	}

	render() {
		const {user, theme} = this.props;
		if (user === null) {
			return <Loading/>
		}

		return (
			<$App color={theme}>
				{user === "None" ?
					<React.Suspense fallback={<Loading/>}>
						<SignIn/>
						<Footer/>
					</React.Suspense> :
					<React.Suspense fallback={<Loading/>}>
						<Dashboard/>
					</React.Suspense>
				}
			</$App>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		theme: state.theme.palette,
		currentTheme: state.theme.color
	}
};

export default connect(mapStateToProps, {fetchUser, changeTheme})(App);