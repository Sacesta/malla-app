import React from 'react';
import { ThemeProvider } from './theme';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const AllContexts = ({ children }) => {

    return (
        <Provider store={store}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </Provider>
    )
}

export default AllContexts;
