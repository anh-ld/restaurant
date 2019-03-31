export const changeTheme = color => dispatch => {
	localStorage.setItem('color', color);
	dispatch({
		type: "CHANGE_THEME",
		color
	})
};