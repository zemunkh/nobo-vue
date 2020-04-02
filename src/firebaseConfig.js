import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const config = {
    apiKey: "AIzaSyBMx9IjbEqoDaxbZSlnSwQscQ2Z5YApluI",
    authDomain: "nobodemo-da07a.firebaseapp.com",
    databaseURL: "https://nobodemo-da07a.firebaseio.com",
    projectId: "nobodemo-da07a",
    storageBucket: "nobodemo-da07a.appspot.com",
    messagingSenderId: "54142263707"
  };
firebase.initializeApp(config)

// firebase utilities
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// date fix by firebase
// const settings = {
//     timestampsInSnapshots: true
// }
// db.settings(settings);

// firebase collections
const usersCollection = db.collection('users');
const booksCollection = db.collection('books');


export {
    db,
    auth, 
    currentUser,
    usersCollection,
    booksCollection 
}