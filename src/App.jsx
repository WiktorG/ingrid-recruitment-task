import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '~/styled/theme';
import GlobalStyles from '~/styled/GlobalStyles';

import store from '~/redux/store';

import Footer from '~/components/Footer/Footer';
import Container from '~/components/Container/Container';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Container><div>123</div></Container>
            <Footer />
        </ThemeProvider>
    </Provider>
);

export default App;
