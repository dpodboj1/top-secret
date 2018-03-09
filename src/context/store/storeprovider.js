import React, { Component } from 'react';
import StoreContext from './storecontext';

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
        return (
            <StoreContext.Provider value={this.state}>
                {this.props.children}
            </StoreContext.Provider>
        );
    }
}

export default StoreProvider;
