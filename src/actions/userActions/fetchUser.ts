import {authRef} from 'Config/firebase'

export const fetchUser = () => (dispatch: any) => {
    const dispatchUser = (payload: any) => {
        dispatch({ type: "FETCH_USER", payload})
    }

    authRef.onAuthStateChanged(user => {
        if (user) {
            dispatchUser(user)
        } else {
            dispatchUser("None")
        }
    })
}