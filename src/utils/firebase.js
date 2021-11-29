import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20",
  authDomain: "ytc-app-stream.firebaseapp.com",
  projectId: "ytc-app-stream",
  storageBucket: "ytc-app-stream.appspot.com",
  messagingSenderId: "723112692824",
  appId: "1:723112692824:web:833e3cfcceeb5569720e2d",
  measurementId: "G-KJ8PMC8BSX",
};

// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase.auth();
