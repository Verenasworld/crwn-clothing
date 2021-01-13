import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6auHeyEJ0IZtU5Dv_orAXhISXGLl2sn4",
    authDomain: "crwn-db-274e6.firebaseapp.com",
    projectId: "crwn-db-274e6",
    storageBucket: "crwn-db-274e6.appspot.com",
    messagingSenderId: "33705253747",
    appId: "1:33705253747:web:cb4f7d0daa2c6ae5d80306",
    measurementId: "G-TYTL1L7EM7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;