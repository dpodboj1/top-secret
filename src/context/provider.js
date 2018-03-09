import React from 'react';
import StoreProvider from './store/storeprovider';

const Provider = ({ children }) => <StoreProvider>{children}</StoreProvider>;

export default Provider;
