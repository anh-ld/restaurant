import {db} from 'Config/firebase'

export const fetchData = (uid: string) => (dispatch: any) => {
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