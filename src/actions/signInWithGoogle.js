import { authRef, provider } from '../config/firebase';

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};