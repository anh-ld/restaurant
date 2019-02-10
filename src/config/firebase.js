import firebase from 'firebase';
import config from './firebaseConfig';

firebase.initializeApp(config);

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();