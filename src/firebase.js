// import { firebase } from '@firebase/app';
import 'firebase/firestore';
import firebase from "firebase";
// import firebase from 'firebase/app';
import 'firebase/auth';
// import * as firebase from "firebase";
// import * as firebase from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyD7zwtkTyJzBODIcwksxg-jk1sv_QUDPkQ",
  authDomain: "chattingwhatsapp-b4810.firebaseapp.com",
  databaseURL: "https://chattingwhatsapp-b4810.firebaseio.com",
  projectId: "chattingwhatsapp-b4810",
  storageBucket: "chattingwhatsapp-b4810.appspot.com",
  messagingSenderId: "947746077045",
  appId: "1:947746077045:web:6dd4bb4e2d1c0458c27b3c",
  measurementId: "G-4255ZKHBCT"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth , provider}
  export default db;
