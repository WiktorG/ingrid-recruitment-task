import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '~/styled/theme';
import GlobalStyles from '~/styled/GlobalStyles';
import 'react-vis/dist/style.css';

import store from '~/redux/store';

import CurrencyConverter from '~/components/CurrencyConverter/CurrencyConverter';
import CurrencyHistory from '~/components/CurrencyHistory/CurrencyHistory';
import Footer from '~/components/Footer/Footer';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <CurrencyConverter />
            <CurrencyHistory />
            <Footer />
        </ThemeProvider>
    </Provider>
);

export default App;
