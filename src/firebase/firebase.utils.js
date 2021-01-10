import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   
        apiKey: "AIzaSyC3Bqf0kmvEQEeB4wQBS7fWeGpcM2SwbcY",
        authDomain: "my-project-a893f.firebaseapp.com",
        projectId: "my-project-a893f",
        storageBucket: "my-project-a893f.appspot.com",
        messagingSenderId: "571815393337",
        appId: "1:571815393337:web:16c7dd06744c9fc61735e8",
        measurementId: "G-0R0K2P824B"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
};
      


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;