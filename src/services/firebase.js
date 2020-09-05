// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add services that you want to use
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import 'firebase/firebase-database';
import "firebase/analytics";
import "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
const config = {
  apiKey: "AIzaSyBUZznDV2Dp5A8N-KTafqnezChc-2EH14E",
  authDomain: "dating-clone-62e11.firebaseapp.com",
  databaseURL: "https://dating-clone-62e11.firebaseio.com",
  projectId: "dating-clone-62e11",
  storageBucket: "dating-clone-62e11.appspot.com",
  messagingSenderId: "315507843733",
  appId: "1:315507843733:web:8b6be6f3e3b0a0e088b19c",
  measurementId: "G-31GLYNJ487"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
export const firestore = firebase.firestore();
