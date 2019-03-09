import { authRef, GoogleAuthProvider } from '../../config/firebase';

export const signInWithGoogle = () => dispatch => {
  authRef
    .signInWithPopup(GoogleAuthProvider)
    .catch(error => {
      console.log(error);
    });
};

export const signInAnon = () => dispatch => {
  authRef
    .signInAnonymously()
    .catch(error => {
      console.log(error);
    })
}