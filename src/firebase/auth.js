import { auth } from 'firebase/auth';

const doSignInWithRedirect = async authProvider => {
    await auth.signInWithRedirect(authProvider);
};

const doSignOut = async () => {
    await auth.signOut();
};

export { doSignInWithRedirect, doSignOut };
