import firebase from "firebase";

const {
    EACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID
} = process.env;

const firebaseConfig = {
    apiKey: EACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
    messagesRef.push({
        name,
        text
    });
}
