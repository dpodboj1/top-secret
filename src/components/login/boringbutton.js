import React from 'react';
import { Button } from 'semantic-ui-react';

const BoringButton = () => (
    <Button
        onClick={() => alert('You are such a disappointment.')}
        color="red"
        fluid
        size="large"
    >
        No, I am boring.
    </Button>
);

export default BoringButton;
