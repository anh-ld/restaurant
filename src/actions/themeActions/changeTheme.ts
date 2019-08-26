export const changeTheme = (color: string) => (dispatch: any) => {
    localStorage.setItem('color', color);
    dispatch({
        type: "CHANGE_THEME",
        color
    })
}