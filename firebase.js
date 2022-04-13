import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API,
    authDomain: "whatsapp-clone-de168.firebaseapp.com",
    projectId: "whatsapp-clone-de168",
    storageBucket: "whatsapp-clone-de168.appspot.com",
    messagingSenderId: "831011850",
    appId: "1:831011850:web:e0ffdf33a413678b4433f3",
    measurementId: "G-0WHHVFTPLK"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};