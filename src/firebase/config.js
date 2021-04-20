import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2HwMG3twiiZJuGcAz6n7ASicdt5-Gmq8",
    authDomain: "champions-league-578dc.firebaseapp.com",
    projectId: "champions-league-578dc",
    storageBucket: "champions-league-578dc.appspot.com",
    messagingSenderId: "591882160432",
    appId: "1:591882160432:web:59d5fd8829959a4261a0f5"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };