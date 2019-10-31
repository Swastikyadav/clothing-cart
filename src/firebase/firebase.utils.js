import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBL0Zk5iaVYPgHBKCW01OnOqHI4Mo1KrQ0",
  authDomain: "clothing-cart.firebaseapp.com",
  databaseURL: "https://clothing-cart.firebaseio.com",
  projectId: "clothing-cart",
  storageBucket: "clothing-cart.appspot.com",
  messagingSenderId: "328629154123",
  appId: "1:328629154123:web:358483a716ee064dbeb8ce"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;