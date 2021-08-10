import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-jRIHjX2Nzaaa57WiUrCK9rQLHU6LFl0",
  authDomain: "linkedin-clone-928fa.firebaseapp.com",
  projectId: "linkedin-clone-928fa",
  storageBucket: "linkedin-clone-928fa.appspot.com",
  messagingSenderId: "545148344682",
  appId: "1:545148344682:web:ab6d5aa64f2fb542e4ad13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
