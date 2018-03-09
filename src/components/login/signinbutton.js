import React from 'react';
import { Button } from 'semantic-ui-react';
import StoreContext from '../../context/store/storecontext';

const SignInButton = () => (
    <StoreContext.Consumer>
        {({ actions }) => (
            <Button
                onClick={() => actions.myAction()}
                color="blue"
                fluid
                size="large"
            >
                Yes, I am awesome.
            </Button>
        )}
    </StoreContext.Consumer>
);

export default SignInButton;
