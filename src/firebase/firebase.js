import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyAee2gIRDFpHWQc1q0NSLddc8idF9VvD8M',
    authDomain: 'top-secret-8ef19.firebaseapp.com',
    databaseURL: 'https://top-secret-8ef19.firebaseio.com',
    projectId: 'top-secret-8ef19'
};

const defaultApp = firebase.initializeApp(config, 'top-secret');

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default defaultApp;
