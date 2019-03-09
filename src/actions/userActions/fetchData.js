import { db } from '../../config/firebase';

export const fetchData = (uid) => dispatch => {
  db.collection('db').doc(uid).get()
    .then(doc => {
      if (doc.exists) {
        dispatch({
          type: "FETCH_DATA",
          payload: doc.data().data
        })
      }
    })
}