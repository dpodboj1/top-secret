import defaultApp from './firebase';

export const defaultAuth = defaultApp.auth();

export const doSignInWithPopup = authProvider => {
    defaultAuth.signInWithPopup(authProvider);
};

export const doSignOut = () => {
    defaultAuth.signOut();
};
