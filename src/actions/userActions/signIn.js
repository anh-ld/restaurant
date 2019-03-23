import { authRef, GoogleAuthProvider } from '../../config/firebase';

export const signInWithGoogle = () => {
  authRef
    .signInWithPopup(GoogleAuthProvider)
    .catch(error => {
      console.log(error);
    });
};

export const signInAnon = () => {
  authRef
    .signInAnonymously()
    .catch(error => {
      console.log(error);
    })
};