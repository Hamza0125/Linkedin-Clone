import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA_WF1qVx89fPdKDglg2T5H7E9wC2_4E50",
  authDomain: "linkedin-clone-cc775.firebaseapp.com",
  projectId: "linkedin-clone-cc775",
  storageBucket: "linkedin-clone-cc775.appspot.com",
  messagingSenderId: "576726988086",
  appId: "1:576726988086:web:aaf0d506a621b6ef66ef97",
  measurementId: "G-Y2X59NVEXZ"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db , auth};