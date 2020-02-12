import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/analytics'

const config = {
    apiKey: process.env.API_KEY,
    authDomain: "restaurant-d3ed6.firebaseapp.com",
    databaseURL: "https://restaurant-d3ed6.firebaseio.com",
    projectId: "restaurant-d3ed6",
    storageBucket: "restaurant-d3ed6.appspot.com",
    messagingSenderId: process.env.MESSAGE_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}

firebase.initializeApp(config)

if (process.env.NODE_ENV !== 'development')
    firebase.analytics()

export const authRef = firebase.auth()
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()