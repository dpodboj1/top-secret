import React from 'react';
import {
    Grid,
    Header,
    Form,
    Segment,
    Message,
    Divider
} from 'semantic-ui-react';
import SignInButton from './signinbutton';
import BoringButton from './boringbutton';
import './login.css';

const Login = () => (
    <div className="login-form">
        <Grid
            textAlign="center"
            style={{ height: '100%' }}
            verticalAlign="middle"
        >
            <Grid.Column
                style={{
                    maxWidth: 450
                }}
            >
                <Header as="h2" color="black" textAlign="center">
                    Are you ready to play?
                </Header>
                <Form size="large">
                    <Segment>
                        <SignInButton />
                        <Divider horizontal>or</Divider>
                        <BoringButton />
                    </Segment>
                </Form>
                <Message>Always use your Brandwatch Google account!</Message>
            </Grid.Column>
        </Grid>
    </div>
);

export default Login;
