import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAu7ZzPzKp5S2ys0VRYCaq2DeobG4mVeHY",
  authDomain: "uclapp-bd1ad.firebaseapp.com",
  databaseURL: "https://uclapp-bd1ad.firebaseio.com",
  projectId: "uclapp-bd1ad",
  storageBucket: "uclapp-bd1ad.appspot.com",
  messagingSenderId: "824361381489",
  appId: "1:824361381489:web:72e45ea64be704f182b5d0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };