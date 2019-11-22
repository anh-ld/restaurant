import {authRef, GoogleAuthProvider} from 'Config/firebase'

export const signInWithGoogle = () => async (dispatch: any) => {
    try { await authRef.signInWithRedirect(GoogleAuthProvider) }
    catch (e) { console.warn(e) }
}

export const signInAnon = () => async (dispatch: any) => {
    try { await authRef.signInAnonymously()}
    catch (e) { console.warn(e) }
}