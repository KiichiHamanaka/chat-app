import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig ={
    apiKey: "AIzaSyAorvG7LAHqI-WiboX4mLlre0G1rFeWVmU",
    authDomain: "chat-app-ae081.firebaseapp.com",
    projectId: "chat-app-ae081",
    storageBucket: "chat-app-ae081.appspot.com",
    messagingSenderId: "858674834559",
    appId: "1:858674834559:web:ed609d1b8368f03788e34a"
}
if (!firebase.apps.length)firebase.initializeApp(firebaseConfig);
export { firebase };