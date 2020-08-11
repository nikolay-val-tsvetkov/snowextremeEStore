import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB6AChDVtfL187GSY4qK1P_2GE1cnLm4tc',
  authDomain: 'snowextreme-c91c0.firebaseapp.com',
  databaseURL: 'https://snowextreme-c91c0.firebaseio.com',
  projectId: 'snowextreme-c91c0',
  storageBucket: 'snowextreme-c91c0.appspot.com',
  messagingSenderId: '40007901307',
  appId: '1:40007901307:web:ab6de905d296d08a4302de',
  measurementId: 'G-105LR1S7PZ',
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
        ...additionalData,
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
