import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '~/styled/theme';
import GlobalStyles from '~/styled/GlobalStyles';

import store from '~/redux/store';

import Input from '~/components/Input/Input';
import Container from '~/components/Container/Container';
import Footer from '~/components/Footer/Footer';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Container>
                <span>
                <Input
                    placeholder="Lorem ipsum"
                />
                </span>
            </Container>
            <Footer />
        </ThemeProvider>
    </Provider>
);

export default App;
