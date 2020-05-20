import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithThemeAndReduxProvider } from '~/helpers/testHelpers';

import CurrencyChart from './CurrencyChart';

test('component should render', async () => {
    renderWithThemeAndReduxProvider(<CurrencyChart />);
    const converterNode = screen.getByTestId('CurrencyChart');
    expect(converterNode).toBeInTheDocument();
});
