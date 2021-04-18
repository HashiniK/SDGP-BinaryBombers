import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxx8KR5HyGxCRDsRufzBURglAYBbBkys0",
    authDomain: "login-binarybombers.firebaseapp.com",
    projectId: "login-binarybombers",
    storageBucket: "login-binarybombers.appspot.com",
    messagingSenderId: "775557985757",
    appId: "1:775557985757:web:390ee01bf0df357f5eb234",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };