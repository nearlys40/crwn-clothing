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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if(!snapshot.exists) {
        const { displayName, email } = userAuth
        const createAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;