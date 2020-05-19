import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithThemeAndReduxProvider } from '~/helpers/testHelpers';

import CurrencyConverter from './CurrencyConverter';

test('component should render', async () => {
    renderWithThemeAndReduxProvider(<CurrencyConverter />);
    const converterNode = screen.getByTestId('CurrencyConverter');
    expect(converterNode).toBeInTheDocument();
});
