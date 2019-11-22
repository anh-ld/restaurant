import {authRef} from 'Config/firebase'

export const signOut = () => async (dispatch: any) => {
    try {
        await authRef.signOut()
        dispatch({type: "SIGN_OUT"})
    }
    catch (e) { console.warn(e) }
}