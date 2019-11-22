import {db} from 'Config/firebase'

export const fetchData = (uid: string) => async (dispatch: any) => {
    const doc = await db.collection('db').doc(uid).get()
    if (doc.exists) {
        dispatch({
            type: "FETCH_DATA",
            payload: doc.data().data
        })
    }
}