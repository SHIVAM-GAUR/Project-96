import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyADAyJnBRmnDx_AY0J3naN_2NkOFCOhBEU",
    authDomain: "b-m-i-checker.firebaseapp.com",
    projectId: "b-m-i-checker",
    storageBucket: "b-m-i-checker.appspot.com",
    messagingSenderId: "424026860550",
    appId: "1:424026860550:web:c0440c3b1a8b6101f6a787"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
