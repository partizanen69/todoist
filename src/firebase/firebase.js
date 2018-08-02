import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyB0b3BtVu1R2cH6QUGwJFf9EV4EOU_G3o8",
    authDomain: "todoist-ninja.firebaseapp.com",
    databaseURL: "https://todoist-ninja.firebaseio.com",
    projectId: "todoist-ninja",
    storageBucket: "todoist-ninja.appspot.com",
    messagingSenderId: "717454899133"
};
  
if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export default firebase;

export {
	auth,
	db
}