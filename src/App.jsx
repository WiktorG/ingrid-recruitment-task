import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import theme from '~/styled/theme';
import GlobalStyles from '~/styled/GlobalStyles';

import store, { persistor } from '~/redux/store';

import CurrencyConverter from '~/components/CurrencyConverter/CurrencyConverter';
import CurrencyHistory from '~/components/CurrencyHistory/CurrencyHistory';
import Footer from '~/components/Footer/Footer';

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <CurrencyConverter />
                <CurrencyHistory />
                <Footer />
                <GlobalStyles />
            </ThemeProvider>
        </PersistGate>
    </Provider>
);

export default App;
