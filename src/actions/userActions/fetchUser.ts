import {authRef} from 'Config/firebase'

export const fetchUser = () => (dispatch: any) => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: "FETCH_USER",
                payload: user
            })
        } else {
            dispatch({
                type: "FETCH_USER",
                payload: "None"
            })
        }
    })
}