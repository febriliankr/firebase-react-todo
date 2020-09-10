import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBOlYA88ti1fFyHKpyLQfwrxKtIm965IEc",
    authDomain: "todo-react-21280.firebaseapp.com",
    databaseURL: "https://todo-react-21280.firebaseio.com",
    projectId: "todo-react-21280",
    storageBucket: "todo-react-21280.appspot.com",
    messagingSenderId: "93285579071",
    appId: "1:93285579071:web:216547df028cc7cbb9bb8a",
    measurementId: "G-0L08WQDJ80"
});

const db = firebaseApp.firestore();

export default  db ;

