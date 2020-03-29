import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWt4BYowsU0CdH0FD8mOImv5eRwIE7w2o",
    authDomain: "crwn-db-f944f.firebaseapp.com",
    databaseURL: "https://crwn-db-f944f.firebaseio.com",
    projectId: "crwn-db-f944f",
    storageBucket: "crwn-db-f944f.appspot.com",
    messagingSenderId: "986280996691",
    appId: "1:986280996691:web:3062d20ee3dc79bb67fba6",
    measurementId: "G-F1BWD68NMP"
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => {
    return auth.signInWithPopup(provider);
};

export default firebase;
