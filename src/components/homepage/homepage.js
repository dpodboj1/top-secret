import React from 'react';
import { Button } from 'semantic-ui-react';
import { auth } from '../../firebase';

const Homepage = () => (
    <div>
        <h1>Maybe you arent a disappointment after all.</h1>
        <Button
            onClick={() => {
                auth.doSignOut();
            }}
        >
            Sign Out
        </Button>
    </div>
);

export default Homepage;
