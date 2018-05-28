import * as firebase from 'firebase';

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

const auth = firebase.auth();

export {
	auth
}