import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBela8LVNrP92XAqVcczbAJOdHRfFPZ-_U",
        authDomain: "crown-db-b5795.firebaseapp.com",
        projectId: "crown-db-b5795",
        storageBucket: "crown-db-b5795.appspot.com",
        messagingSenderId: "525627125584",
        appId: "1:525627125584:web:401018c58e5c83c7974655",
        measurementId: "G-19TEGJ0L2R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;