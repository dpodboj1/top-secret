import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from '../constants/routes';
import Provider from '../context/Provider';
import Login from './login';
import Homepage from './homepage';

const App = () => (
    <Provider>
        <Router>
            <div>
                <Route
                    exact
                    path={routes.SIGN_IN}
                    component={() => <Login />}
                />
                <Route
                    exact
                    path={routes.HOME}
                    component={() => <Homepage />}
                />
            </div>
        </Router>
    </Provider>
);

export default App;
