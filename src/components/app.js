import React from 'react';

import DefaultRouter from './router';
import Provider from '../context/Provider';

const App = () => (
    <Provider>
        <DefaultRouter />
    </Provider>
);

export default App;
