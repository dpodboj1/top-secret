import firebase from 'firebase/app';

const config = {
    apiKey: 'AIzaSyAee2gIRDFpHWQc1q0NSLddc8idF9VvD8M',
    authDomain: 'top-secret-8ef19.firebaseapp.com',
    databaseURL: 'https://top-secret-8ef19.firebaseio.com',
    projectId: 'top-secret-8ef19'
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const database = firebase.database();

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database, auth, googleAuthProvider };
