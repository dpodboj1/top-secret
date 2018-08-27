import React, { Component } from 'react';
import {
    Grid,
    Header,
    Form,
    Segment,
    Message,
    Divider,
    Loader
} from 'semantic-ui-react';

import SignInButton from './SignInButton';
import BoringButton from './BoringButton';

import withStore from '../../context/store/withStore';

import './login.css';

class Login extends Component {
    getContent = () => {
        const { store } = this.props;

        if (store.globalLoading) {
            return <Loader>Loading</Loader>;
        }

        return (
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
                        <Message>
                            Always use your Brandwatch Google account!
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    };

    render() {
        return this.getContent();
    }
}

export default withStore(Login);
