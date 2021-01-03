import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC5eXjNz7hjEG8GUdWCgKsQucLg8d2STM0",
    authDomain: "idobatakaigi-cfe7f.firebaseapp.com",
    projectId: "idobatakaigi-cfe7f",
    storageBucket: "idobatakaigi-cfe7f.appspot.com",
    messagingSenderId: "227846750852",
    appId: "1:227846750852:web:93f9a95adfe868e74838d1"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
    messageRef.push({
        name,
        text
    });
}
