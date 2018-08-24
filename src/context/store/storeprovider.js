import React, { Component } from 'react';
import StoreContext from './StoreContext';

class StoreProvider extends Component {
    state = {
        store: {
            authUser: null
        },
        actions: {
            myAction: () => {
                this.setState({
                    store: {
                        authUser: 'sup'
                    }
                });
            }
        }
    };

    render() {
        const { children } = this.props;

        return (
            <StoreContext.Provider value={this.state}>
                {children}
            </StoreContext.Provider>
        );
    }
}

export default StoreProvider;
