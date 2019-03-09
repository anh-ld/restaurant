import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './firebaseConfig';

firebase.initializeApp(config);

export const authRef = firebase.auth();
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();