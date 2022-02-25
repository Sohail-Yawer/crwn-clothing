import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCDtHeDQ2asVx8Gk06mn3A6aNpgpfpDChE",
    authDomain: "crwn-db-e21d6.firebaseapp.com",
    projectId: "crwn-db-e21d6",
    storageBucket: "crwn-db-e21d6.appspot.com",
    messagingSenderId: "491685374604",
    appId: "1:491685374604:web:f2a81d0afa9b3195b8e9a9",
    measurementId: "G-80985CBPW6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( {prompt: 'select_account'} );
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;