import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBM4cN4aGimCCRrDosTpdJykQohOJKXmVA",
  authDomain: "coco-sih.firebaseapp.com",
  projectId: "coco-sih",
  storageBucket: "coco-sih.appspot.com",
  messagingSenderId: "522896815441",
  appId: "1:522896815441:web:6e29e18ad700b390a8cf70",
  measurementId: "G-PZMPYC9YTE"
};
// const db = firebase.firestore();

// export {db};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
