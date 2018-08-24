import React, { Component } from 'react';
import StoreContext from './StoreContext';

const withStore = WrappedComponent =>
    class withStore extends Component {
        render() {
            return (
                <StoreContext.Consumer>
                    {({ store, actions }) => (
                        <WrappedComponent
                            {...this.props}
                            store={store}
                            actions={actions}
                        />
                    )}
                </StoreContext.Consumer>
            );
        }
    };

export default withStore;
