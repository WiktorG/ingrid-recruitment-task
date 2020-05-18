import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '~/styled/theme';
import GlobalStyles from '~/styled/GlobalStyles';

import store from '~/redux/store';

import CurrencyConverter from '~/components/CurrencyConverter/CurrencyConverter';
import Footer from '~/components/Footer/Footer';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <CurrencyConverter />
            <Footer />
        </ThemeProvider>
    </Provider>
);

export default App;
