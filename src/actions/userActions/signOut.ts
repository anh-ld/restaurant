import {authRef} from 'Config/firebase'

export const signOut = () => (dispatch: any) => {
    authRef
        .signOut()
        .then(() => {
            dispatch({
                type: "SIGN_OUT",
            })
        })
        .catch(error => {
            console.warn(error)
        })
}