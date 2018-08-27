import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StoreContext from './StoreContext';

class StoreProvider extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    state = {
        store: {
            authUser: null
        },
        actions: {
            updateAuthUser: authUser => {
                this.setState({
                    store: { authUser }
                });
            }
        }
    };

    render() {
        const { children } = this.props;
        debugger;
        return (
            <StoreContext.Provider value={this.state}>
                {children}
            </StoreContext.Provider>
        );
    }
}

export default StoreProvider;
