import React from 'react';
import StoreProvider from './store/StoreProvider';

const Provider = ({ children }) => <StoreProvider>{children}</StoreProvider>;

export default Provider;
