import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '~/redux/store';
import theme from '~/styled/theme';

export const renderWithThemeProvider = (component) => render(
    <ThemeProvider theme={theme}>
        {component}
    </ThemeProvider>,
);


export const renderWithThemeAndReduxProvider = (component) => render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    </Provider>,
);
