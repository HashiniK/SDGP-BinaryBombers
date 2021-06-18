import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCvDQIG0PxSRf9P23AFWogCnlEiU7GIU8",
  authDomain: "sdgp-login.firebaseapp.com",
  projectId: "sdgp-login",
  storageBucket: "sdgp-login.appspot.com",
  messagingSenderId: "143153394843",
  appId: "1:143153394843:web:fff96c3ae05f24d54dc23e",
  measurementId: "G-1NP9BVB83M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
