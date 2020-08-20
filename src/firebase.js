import firebase from 'firebase' // 1

const firebaseConfig = { // 0
    apiKey: "AIzaSyCyLx_OZLEIzwdhULh-PwWqWvaFbKeg5xQ",
    authDomain: "whatsapp-clone-441be.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-441be.firebaseio.com",
    projectId: "whatsapp-clone-441be",
    storageBucket: "whatsapp-clone-441be.appspot.com",
    messagingSenderId: "363456819517",
    appId: "1:363456819517:web:a467388ff56f6029b99554",
    measurementId: "G-8T82K93J4H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig) // 2
const db = firebaseApp.firestore() // 3
const auth = firebase.auth() // 4
const provider = new firebase.auth.GoogleAuthProvider() // 5

export { auth, provider }
export default db