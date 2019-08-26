import {authRef, GoogleAuthProvider} from '../../config/firebase'

export const signInWithGoogle = () => (dispatch: any) => {
    authRef
    // .signInWithPopup(GoogleAuthProvider)
        .signInWithRedirect(GoogleAuthProvider)
        .catch(error => {
            console.warn(error)
        })
}

export const signInAnon = () => (dispatch: any) => {
    authRef
        .signInAnonymously()
        .catch(error => {
            console.warn(error)
        })
}