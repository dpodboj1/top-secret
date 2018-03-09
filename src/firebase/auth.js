import { auth } from './firebase';

const doSignInWithRedirect = authProvider => {
    auth.signInWithRedirect(authProvider);
};

const doSignOut = () => {
    auth.signOut();
};

export { doSignInWithRedirect, doSignOut };
