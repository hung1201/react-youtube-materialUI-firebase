import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHpJO8TfGL77ZedfGflyAIOqOEk0xODCk",
  authDomain: "react-7850f.firebaseapp.com",
  projectId: "react-7850f",
  storageBucket: "react-7850f.appspot.com",
  messagingSenderId: "246396507696",
  appId: "1:246396507696:web:30f6a97ab623307345bff5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, firebaseConfig };

export default db;
