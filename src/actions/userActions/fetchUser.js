import {authRef} from '../../config/firebase';

export const fetchUser = () => dispatch => {
	authRef.onAuthStateChanged(user => {
		if (user) {
			dispatch({
				type: "FETCH_USER",
				payload: user
			});
		} else {
			dispatch({
				type: "FETCH_USER",
				payload: "None"
			});
		}
	});
};