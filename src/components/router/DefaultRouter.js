import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Login from '../login';
import Homepage from '../homepage';

import withStore from '../../context/store/withStore';
import * as routes from '../../constants/routes';

class DefaultRouter extends Component {
    render() {
        const { store } = this.props;

        return (
            <Router>
                <Fragment>
                    <Route
                        exact
                        path={routes.LANDING}
                        render={() =>
                            store.authUser ? (
                                <Redirect to={routes.HOME} />
                            ) : (
                                <Login />
                            )
                        }
                    />
                    <Route
                        path={routes.HOME}
                        render={() =>
                            store.authUser ? (
                                <Homepage />
                            ) : (
                                <Redirect to={routes.SIGN_IN} />
                            )
                        }
                    />
                    <Route
                        path={routes.SIGN_IN}
                        render={() =>
                            store.authUser ? (
                                <Redirect to={routes.HOME} />
                            ) : (
                                <Login />
                            )
                        }
                    />
                </Fragment>
            </Router>
        );
    }
}

export default withStore(DefaultRouter);
