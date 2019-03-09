import { authRef } from '../../config/firebase';

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      dispatch({
        type: "SIGN_OUT",
      });
    })
    .catch(error => {
      console.log(error);
    });
};