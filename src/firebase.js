import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDC8G1u2Ptdj8InJPPvI1eCmpnvILO4uHY",
  authDomain: "custom-crm-611a5.firebaseapp.com",
  databaseURL: "https://custom-crm-611a5.firebaseio.com",
  projectId: "custom-crm-611a5",
  storageBucket: "custom-crm-611a5.appspot.com",
  messagingSenderId: "995343002214",
  appId: "1:995343002214:web:02c01a62377472c4fc9ba7",
  measurementId: "G-N10KEYRV17",
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
export default firebase;
