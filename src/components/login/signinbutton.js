import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import withStore from '../../context/store/withStore';
import { auth } from '../../firebase';
import { googleAuthProvider } from '../../firebase/firebase';

class SignInButton extends Component {
    componentDidMount() {
        this.listenToAuthChange();
    }

    listenToAuthChange = () => {
        const { actions } = this.props;

        auth.defaultAuth.onAuthStateChanged(authUser => {
            actions.updateAuthUser(authUser);
        });
    };

    render() {
        return (
            <Button
                onClick={() => auth.doSignInWithPopup(googleAuthProvider)}
                color="blue"
                fluid
                size="large"
            >
                Yes, I am awesome.
            </Button>
        );
    }
}

export default withStore(SignInButton);
