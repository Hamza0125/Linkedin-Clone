import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDksC1KP_f42OxeLc_GAYTFbQsngaQ6T88",
    authDomain: "linked-in-clone-144ba.firebaseapp.com",
    projectId: "linked-in-clone-144ba",
    storageBucket: "linked-in-clone-144ba.appspot.com",
    messagingSenderId: "932263460372",
    appId: "1:932263460372:web:b00b0e09e2f2140658b101",
    measurementId: "G-H4WVGTB3HP"
  };
 const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };