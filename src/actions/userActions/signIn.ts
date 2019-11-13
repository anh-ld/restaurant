import {authRef, GoogleAuthProvider} from 'Config/firebase'

export const signInWithGoogle = () => (dispatch: any) => {
    authRef
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