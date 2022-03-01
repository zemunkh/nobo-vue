import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
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
