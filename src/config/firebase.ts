import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

const config = {
    apiKey: process.env.API_KEY,
    authDomain: "restaurant-d3ed6.firebaseapp.com",
    databaseURL: "https://restaurant-d3ed6.firebaseio.com",
    projectId: "restaurant-d3ed6",
    storageBucket: "restaurant-d3ed6.appspot.com"
}

firebase.initializeApp(config)

export const authRef = firebase.auth()
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()