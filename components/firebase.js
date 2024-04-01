import firebase from 'firebase/app';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAKxtVvABDyKusllWFQIQqRbKqkvkp063s",
  authDomain: "cctv-security-system.firebaseapp.com",
  projectId: "cctv-security-system",
  storageBucket: "cctv-security-system.appspot.com",
  messagingSenderId: "606255301184",
  appId: "1:606255301184:web:118b926d197b58feea95a5",
  measurementId: "G-9HH0NJY7N0",
  serviceAccount: "cctv-security-system-firebase-adminsdk-h91tv-8bdd8dece7.json",
  databaseURL: "https://cctv-security-system-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };