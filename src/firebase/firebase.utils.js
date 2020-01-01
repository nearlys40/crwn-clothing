import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD7cMwZxHWiI_ynHOSKhT0UgtJt9v3HqA0",
    authDomain: "crwn-db-38f58.firebaseapp.com",
    databaseURL: "https://crwn-db-38f58.firebaseio.com",
    projectId: "crwn-db-38f58",
    storageBucket: "crwn-db-38f58.appspot.com",
    messagingSenderId: "1095731692620",
    appId: "1:1095731692620:web:7b396943182151ce5ba0e9",
    measurementId: "G-VLKQQSGVXT"
  };

  firebase.initializeApp(config)
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;