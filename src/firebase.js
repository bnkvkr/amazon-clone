// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDrOeHdnjVXvF9S9CRpIQ5_3MAjbxNoEiU",
  authDomain: "clone-f5755.firebaseapp.com",
  projectId: "clone-f5755",
  storageBucket: "clone-f5755.appspot.com",
  messagingSenderId: "279870505004",
  appId: "1:279870505004:web:805023fd1b02add3c71189",
  measurementId: "G-V1XKN6BGCE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
